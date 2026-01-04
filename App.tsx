import React, { useState, useEffect } from 'react';
import { INITIAL_CONTENT } from './constants';
import { ContentData, GalleryItem, TestimonialItem, CommunityItem } from './types';
import { EditableText, EditableImage } from './components/Editable';

// --- SVGs for Icons ---
const MenuIcon = () => <span className="material-symbols-outlined">menu</span>;
const ArrowForwardIcon = () => <span className="material-symbols-outlined">arrow_forward</span>;
const ArrowOutwardIcon = () => <span className="material-symbols-outlined">arrow_outward</span>;
const StarIcon = () => <span className="material-symbols-outlined text-sm fill-current">star</span>;
const DiamondIcon = () => <span className="material-symbols-outlined text-primary text-3xl mb-4">diamond</span>;
const DryCleaningIcon = () => <span className="material-symbols-outlined text-primary text-3xl mb-4">dry_cleaning</span>;
const OpenInNewIcon = () => <span className="material-symbols-outlined text-sm">open_in_new</span>;
const SpaIcon = () => <span className="material-symbols-outlined text-sm">spa</span>;
const GraphicEqIcon = () => <span className="material-symbols-outlined">graphic_eq</span>;
const FilterVintageIcon = () => <span className="material-symbols-outlined">filter_vintage</span>;
const ChairIcon = () => <span className="material-symbols-outlined">chair</span>;
const CheckroomIcon = () => <span className="material-symbols-outlined">checkroom</span>;
const StorefrontIcon = () => <span className="material-symbols-outlined">storefront</span>;
const VisibilityIcon = () => <span className="material-symbols-outlined text-[16px]">visibility</span>;
const ScheduleIcon = () => <span className="material-symbols-outlined">schedule</span>;
const MyLocationIcon = () => <span className="material-symbols-outlined text-gray-400">my_location</span>;
const LocationOnIcon = () => <span className="material-symbols-outlined text-primary mb-1">location_on</span>;
const AlternateEmailIcon = () => <span className="material-symbols-outlined text-primary mb-1">alternate_email</span>;
const NorthIcon = () => <span className="material-symbols-outlined text-sm group-hover:-translate-y-1 transition-transform">north</span>;
const ChatBubbleIcon = () => <span className="material-symbols-outlined">chat_bubble</span>;

const App: React.FC = () => {
  const [content, setContent] = useState<ContentData>(() => {
    const saved = localStorage.getItem('yen_may_content');
    return saved ? JSON.parse(saved) : INITIAL_CONTENT;
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem('yen_may_content', JSON.stringify(content));
  }, [content]);

  const update = (section: keyof ContentData, field: string, value: any) => {
    setContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const updateItem = <T extends { id: string }>(
    section: keyof ContentData, 
    itemsField: string, 
    itemId: string, 
    field: keyof T, 
    value: any
  ) => {
    setContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [itemsField]: (prev[section] as any)[itemsField].map((item: T) => 
          item.id === itemId ? { ...item, [field]: value } : item
        )
      }
    }));
  };

  const updateArray = (section: keyof ContentData, field: string, index: number, value: any) => {
      setContent(prev => {
          const newArray = [...(prev[section] as any)[field]];
          newArray[index] = value;
          return {
              ...prev,
              [section]: {
                  ...prev[section],
                  [field]: newArray
              }
          };
      });
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main font-display antialiased selection:bg-primary/30 min-h-screen">
      
      {/* Admin Control */}
      <div className="fixed bottom-4 left-4 z-[100] flex gap-2">
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className={`px-4 py-2 rounded-full font-bold shadow-lg transition-all ${isEditing ? 'bg-green-500 text-white' : 'bg-gray-800 text-white'}`}
        >
          {isEditing ? 'Editing Mode ON' : 'Edit Website'}
        </button>
        {isEditing && (
            <button 
                onClick={() => {
                    if(confirm('Reset all content to default?')) {
                        setContent(INITIAL_CONTENT);
                        setIsEditing(false);
                    }
                }}
                className="px-4 py-2 bg-red-500 text-white rounded-full font-bold shadow-lg"
            >
                Reset
            </button>
        )}
      </div>

      {/* Navbar */}
      <div className="fixed top-0 z-50 w-full bg-background-light/95 backdrop-blur-md border-b border-[#e7f3f1] dark:bg-background-dark/95 dark:border-[#2a403d]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <header className="flex h-20 items-center justify-between">
            <a className="flex flex-col items-center justify-center gap-0 leading-none group" href="#top">
              <span className="font-serif-heading text-4xl font-normal text-text-main dark:text-white tracking-wide">Yen May</span>
              <span className="font-display text-[10px] tracking-[0.4em] text-text-main dark:text-primary/90 uppercase font-bold mt-[-3px] group-hover:text-primary transition-colors duration-300">VINTAGE</span>
            </a>
            <nav className="hidden md:flex gap-8 items-center">
              <a className="text-sm font-medium hover:text-primary transition-colors dark:text-gray-200" href="#brand-heart">Brand Heart</a>
              <a className="text-sm font-medium hover:text-primary transition-colors dark:text-gray-200" href="#gallery">Gallery</a>
              <a className="text-sm font-medium hover:text-primary transition-colors dark:text-gray-200" href="#prestige">Prestige</a>
              <a className="text-sm font-medium hover:text-primary transition-colors dark:text-gray-200" href="#oasis">Oasis</a>
            </nav>
            <div className="flex items-center gap-4">
              <a className="hidden sm:flex h-9 px-5 items-center justify-center rounded-sm border border-primary text-primary hover:bg-primary hover:text-white text-xs font-bold uppercase tracking-wider transition-all" href="https://instagram.com" target="_blank" rel="noreferrer">
                Follow on IG
              </a>
              <button className="md:hidden p-2 text-text-main dark:text-white">
                <MenuIcon />
              </button>
            </div>
          </header>
        </div>
      </div>

      <main className="flex flex-col w-full pt-20">
        
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center min-h-[85vh] w-full p-4 md:p-8 overflow-hidden">
            <div className="absolute inset-0 z-0">
                 {/* Background Image Logic for Hero - Special case as it's a CSS background image */}
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
                    style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.4) 100%), url("${content.hero.bgImage}")` }}
                />
                 {isEditing && (
                    <div className="absolute top-4 right-4 z-50">
                        <button 
                            className="bg-white/80 backdrop-blur px-3 py-1 text-xs font-bold rounded shadow"
                            onClick={() => {
                                const url = prompt("Enter Hero Background URL:", content.hero.bgImage);
                                if (url) update('hero', 'bgImage', url);
                            }}
                        >
                            Change Hero Background
                        </button>
                    </div>
                )}
            </div>
            <div className="absolute inset-0 z-0 bg-vintage-grain opacity-30 mix-blend-overlay pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-4 animate-fade-in-up">
                <span className="mb-4 inline-block rounded-full bg-white/20 backdrop-blur-sm px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white border border-white/30">
                    <EditableText value={content.hero.est} onSave={v => update('hero', 'est', v)} isEditing={isEditing} />
                </span>
                <EditableText 
                    tag="h2"
                    className="font-serif-heading text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-tight drop-shadow-sm mb-6"
                    value={content.hero.title} 
                    onSave={v => update('hero', 'title', v)} 
                    isEditing={isEditing} 
                />
                <div className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 font-light leading-relaxed drop-shadow-sm">
                    <EditableText 
                        tag="p"
                        value={content.hero.subtitle} 
                        onSave={v => update('hero', 'subtitle', v)} 
                        isEditing={isEditing} 
                    />
                </div>
                <a className="group flex h-14 min-w-[200px] items-center justify-center gap-2 rounded-full bg-white text-text-main text-base font-bold hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-primary/30" href="#gallery">
                    <EditableText value={content.hero.cta} onSave={v => update('hero', 'cta', v)} isEditing={isEditing} />
                    <span className="text-lg transition-transform group-hover:translate-x-1"><ArrowForwardIcon /></span>
                </a>
            </div>
        </section>

        {/* Brand Heart Section */}
        <section className="py-24 px-4 sm:px-8 bg-background-light dark:bg-background-dark relative overflow-hidden" id="brand-heart">
            <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 flex flex-col gap-8">
                    <div className="space-y-4">
                        <span className="text-primary font-bold tracking-widest text-xs uppercase">
                            <EditableText value={content.brandHeart.subtitle} onSave={v => update('brandHeart', 'subtitle', v)} isEditing={isEditing} />
                        </span>
                        <h3 className="font-serif-heading text-4xl md:text-5xl text-text-main dark:text-white leading-tight">
                             <EditableText value={content.brandHeart.title} onSave={v => update('brandHeart', 'title', v)} isEditing={isEditing} />
                        </h3>
                        <div className="text-text-muted dark:text-gray-400 text-lg leading-relaxed max-w-lg">
                            <EditableText tag="p" value={content.brandHeart.description} onSave={v => update('brandHeart', 'description', v)} isEditing={isEditing} />
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl bg-white dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800">
                            <DiamondIcon />
                            <h4 className="font-bold text-lg mb-2 dark:text-white">
                                <EditableText value={content.brandHeart.feature1Title} onSave={v => update('brandHeart', 'feature1Title', v)} isEditing={isEditing} />
                            </h4>
                            <div className="text-sm text-text-muted dark:text-gray-400">
                                <EditableText tag="p" value={content.brandHeart.feature1Text} onSave={v => update('brandHeart', 'feature1Text', v)} isEditing={isEditing} />
                            </div>
                        </div>
                        <div className="p-6 rounded-xl bg-white dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800">
                            <DryCleaningIcon />
                            <h4 className="font-bold text-lg mb-2 dark:text-white">
                                <EditableText value={content.brandHeart.feature2Title} onSave={v => update('brandHeart', 'feature2Title', v)} isEditing={isEditing} />
                            </h4>
                            <div className="text-sm text-text-muted dark:text-gray-400">
                                <EditableText tag="p" value={content.brandHeart.feature2Text} onSave={v => update('brandHeart', 'feature2Text', v)} isEditing={isEditing} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-1 lg:order-2 relative group">
                    <div className="absolute -inset-4 bg-primary/10 rounded-2xl rotate-3 transition-transform group-hover:rotate-1"></div>
                    <div className="relative rounded-lg shadow-xl w-full h-[500px] overflow-hidden">
                        <EditableImage 
                            src={content.brandHeart.mainImage} 
                            alt="Brand detail" 
                            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                            onSave={url => update('brandHeart', 'mainImage', url)}
                            isEditing={isEditing}
                        />
                    </div>
                    <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur dark:bg-black/80 px-4 py-2 rounded-lg text-xs font-bold shadow-lg">
                        100% Authentic Vintage
                    </div>
                </div>
            </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 px-4 sm:px-8 bg-background-light dark:bg-background-dark" id="gallery">
            <div className="max-w-[1280px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-primary font-bold tracking-widest text-xs uppercase">
                            <EditableText value={content.gallery.subtitle} onSave={v => update('gallery', 'subtitle', v)} isEditing={isEditing} />
                        </span>
                        <h3 className="font-serif-heading text-4xl md:text-5xl text-text-main dark:text-white mt-2">
                            <EditableText value={content.gallery.title} onSave={v => update('gallery', 'title', v)} isEditing={isEditing} />
                        </h3>
                    </div>
                    <div className="max-w-md text-right md:text-right text-left">
                        <div className="text-sm text-text-muted dark:text-gray-400 mb-3">
                             <EditableText tag="p" value={content.gallery.description} onSave={v => update('gallery', 'description', v)} isEditing={isEditing} />
                        </div>
                        <a className="inline-flex items-center text-primary font-bold text-sm hover:underline" href="#">
                            <EditableText value={content.gallery.cta} onSave={v => update('gallery', 'cta', v)} isEditing={isEditing} />
                            <span className="text-sm ml-1"><ArrowOutwardIcon /></span>
                        </a>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {content.gallery.items.map((item) => (
                        <div key={item.id} className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100">
                             <EditableImage 
                                src={item.image} 
                                alt={item.title}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                onSave={url => updateItem<GalleryItem>('gallery', 'items', item.id, 'image', url)}
                                isEditing={isEditing}
                            />
                            {item.tag && (
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-black text-xs font-bold px-3 py-1 rounded-full z-10">
                                    <EditableText value={item.tag} onSave={v => updateItem<GalleryItem>('gallery', 'items', item.id, 'tag', v)} isEditing={isEditing} />
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-white font-serif-heading text-2xl italic">
                                    <EditableText value={item.title} onSave={v => updateItem<GalleryItem>('gallery', 'items', item.id, 'title', v)} isEditing={isEditing} />
                                </span>
                                <span className="text-primary text-sm font-bold mt-1">
                                    <EditableText value={item.status} onSave={v => updateItem<GalleryItem>('gallery', 'items', item.id, 'status', v)} isEditing={isEditing} />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-20 flex justify-center">
                    <button className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-text-main dark:border-white text-text-main dark:text-white font-bold hover:bg-text-main hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                        View Full Gallery on Instagram
                        <OpenInNewIcon />
                    </button>
                </div>
            </div>
        </section>

        {/* Community Section */}
        <section className="py-20 bg-background-light dark:bg-background-dark overflow-hidden border-t border-[#e7f3f1] dark:border-[#2a403d]">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
                <div className="mb-12 flex flex-col items-center text-center">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3">
                         <EditableText value={content.community.subtitle} onSave={v => update('community', 'subtitle', v)} isEditing={isEditing} />
                    </span>
                    <h3 className="font-serif-heading text-4xl md:text-5xl text-text-main dark:text-white mb-4">
                        <EditableText value={content.community.title} onSave={v => update('community', 'title', v)} isEditing={isEditing} />
                    </h3>
                    <div className="text-text-muted dark:text-gray-400 max-w-2xl text-lg">
                        <EditableText tag="p" value={content.community.description} onSave={v => update('community', 'description', v)} isEditing={isEditing} />
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {content.community.items.map((item) => (
                        <div key={item.id} className="relative group aspect-[3/4] overflow-hidden rounded-lg bg-gray-200">
                             <EditableImage 
                                src={item.image} 
                                alt={item.handle}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[10%] group-hover:grayscale-0"
                                onSave={url => updateItem<CommunityItem>('community', 'items', item.id, 'image', url)}
                                isEditing={isEditing}
                            />
                            <div className="absolute inset-0 bg-vintage-grain opacity-20 pointer-events-none mix-blend-overlay"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-3">
                                <span className="text-white text-xs font-bold tracking-wide">
                                    <EditableText value={item.handle} onSave={v => updateItem<CommunityItem>('community', 'items', item.id, 'handle', v)} isEditing={isEditing} />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Prestige Section */}
        <section className="py-16 border-y border-[#e7f3f1] dark:border-[#2a403d] bg-white dark:bg-surface-dark" id="prestige">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
                <div className="text-center mb-12">
                    <h4 className="font-serif-heading text-2xl text-text-main dark:text-white mb-2">
                        <EditableText value={content.prestige.title} onSave={v => update('prestige', 'title', v)} isEditing={isEditing} />
                    </h4>
                    <div className="w-12 h-0.5 bg-primary mx-auto rounded-full"></div>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 mb-16">
                     {content.prestige.press.map((press, i) => (
                        <div key={i} className="text-2xl font-serif font-bold tracking-tighter dark:text-white">
                             <EditableText value={press} onSave={v => updateArray('prestige', 'press', i, v)} isEditing={isEditing} />
                        </div>
                     ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {content.prestige.testimonials.map((item) => (
                        <div key={item.id} className="flex flex-col p-8 rounded-xl bg-background-light dark:bg-background-dark border border-gray-100 dark:border-gray-800 shadow-sm transition-transform hover:-translate-y-1 duration-300">
                            <div className="flex gap-1 text-primary mb-4">
                                {[...Array(item.rating)].map((_, i) => <StarIcon key={i} />)}
                            </div>
                            <h5 className="font-serif-heading text-xl text-text-main dark:text-white mb-3">
                                <EditableText value={item.title} onSave={v => updateItem<TestimonialItem>('prestige', 'testimonials', item.id, 'title', v)} isEditing={isEditing} />
                            </h5>
                            <div className="text-sm text-text-muted dark:text-gray-400 italic mb-6 flex-grow leading-relaxed">
                                 <EditableText tag="p" value={item.text} onSave={v => updateItem<TestimonialItem>('prestige', 'testimonials', item.id, 'text', v)} isEditing={isEditing} />
                            </div>
                            <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                                <div className="w-10 h-10 rounded-full overflow-hidden">
                                     <EditableImage 
                                        src={item.avatar} 
                                        alt={item.author} 
                                        className="w-full h-full object-cover"
                                        onSave={url => updateItem<TestimonialItem>('prestige', 'testimonials', item.id, 'avatar', url)}
                                        isEditing={isEditing}
                                    />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-text-main dark:text-white">
                                        <EditableText value={item.author} onSave={v => updateItem<TestimonialItem>('prestige', 'testimonials', item.id, 'author', v)} isEditing={isEditing} />
                                    </div>
                                    <div className="text-[10px] text-text-muted uppercase tracking-wider">
                                        <EditableText value={item.platform} onSave={v => updateItem<TestimonialItem>('prestige', 'testimonials', item.id, 'platform', v)} isEditing={isEditing} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Oasis Section */}
        <section className="py-24 bg-[#F9F7F2] dark:bg-[#1C2E2A] relative overflow-hidden" id="oasis">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 pointer-events-none"></div>
            <div className="max-w-[1280px] mx-auto px-4 sm:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 relative aspect-[16/10] overflow-hidden rounded-lg shadow-md group">
                                <EditableImage 
                                    src={content.oasis.images[0]} 
                                    alt="Interior 1" 
                                    className="w-full h-full object-cover sepia-[0.15] contrast-[0.95] brightness-[1.05] transition-transform duration-700 group-hover:scale-105"
                                    onSave={url => updateArray('oasis', 'images', 0, url)}
                                    isEditing={isEditing}
                                />
                                <div className="absolute inset-0 bg-vintage-grain opacity-30 pointer-events-none mix-blend-overlay"></div>
                            </div>
                            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md group mt-4 lg:mt-0">
                                <EditableImage 
                                    src={content.oasis.images[1]} 
                                    alt="Interior 2" 
                                    className="w-full h-full object-cover sepia-[0.15] contrast-[0.95] brightness-[1.05] transition-transform duration-700 group-hover:scale-105"
                                    onSave={url => updateArray('oasis', 'images', 1, url)}
                                    isEditing={isEditing}
                                />
                                <div className="absolute inset-0 bg-vintage-grain opacity-30 pointer-events-none mix-blend-overlay"></div>
                            </div>
                            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md group mt-4 lg:-mt-8">
                                <EditableImage 
                                    src={content.oasis.images[2]} 
                                    alt="Interior 3" 
                                    className="w-full h-full object-cover sepia-[0.15] contrast-[0.95] brightness-[1.05] transition-transform duration-700 group-hover:scale-105"
                                    onSave={url => updateArray('oasis', 'images', 2, url)}
                                    isEditing={isEditing}
                                />
                                <div className="absolute inset-0 bg-vintage-grain opacity-30 pointer-events-none mix-blend-overlay"></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider bg-primary/5">
                            <SpaIcon />
                            <EditableText value={content.oasis.tag} onSave={v => update('oasis', 'tag', v)} isEditing={isEditing} />
                        </div>
                        <h2 className="font-serif-heading text-4xl md:text-5xl lg:text-6xl text-text-main dark:text-white leading-tight">
                            <EditableText value={content.oasis.title} onSave={v => update('oasis', 'title', v)} isEditing={isEditing} />
                        </h2>
                        <div className="space-y-6 text-lg text-text-muted dark:text-gray-300 font-light leading-relaxed">
                            <EditableText tag="p" value={content.oasis.p1} onSave={v => update('oasis', 'p1', v)} isEditing={isEditing} />
                            <EditableText tag="p" value={content.oasis.p2} onSave={v => update('oasis', 'p2', v)} isEditing={isEditing} />
                        </div>
                        <div className="grid grid-cols-2 gap-6 pt-2">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#E8E4D9] dark:bg-white/10 flex items-center justify-center text-primary"><GraphicEqIcon /></div>
                                <div><h4 className="font-bold text-text-main dark:text-white text-sm">Lo-fi Ambience</h4><p className="text-xs text-text-muted">Relaxing playlists</p></div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#E8E4D9] dark:bg-white/10 flex items-center justify-center text-primary"><FilterVintageIcon /></div>
                                <div><h4 className="font-bold text-text-main dark:text-white text-sm">Aromatherapy</h4><p className="text-xs text-text-muted">Natural scents</p></div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#E8E4D9] dark:bg-white/10 flex items-center justify-center text-primary"><ChairIcon /></div>
                                <div><h4 className="font-bold text-text-main dark:text-white text-sm">Chill Zone</h4><p className="text-xs text-text-muted">Comfortable seating</p></div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#E8E4D9] dark:bg-white/10 flex items-center justify-center text-primary"><CheckroomIcon /></div>
                                <div><h4 className="font-bold text-text-main dark:text-white text-sm">Try It On</h4><p className="text-xs text-text-muted">Spacious fitting rooms</p></div>
                            </div>
                        </div>
                        <div className="pt-6">
                            <a className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-text-main text-white dark:bg-white dark:text-text-main font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-300 shadow-lg hover:shadow-primary/30" href="#visit-us">
                                <EditableText value={content.oasis.cta} onSave={v => update('oasis', 'cta', v)} isEditing={isEditing} />
                                <span className="group-hover:translate-x-1 transition-transform"><ArrowForwardIcon /></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Visit Us Section */}
        <section className="pb-24 pt-12 px-4 sm:px-8 bg-[#F9F7F2] dark:bg-[#1C2E2A]" id="visit-us">
            <div className="max-w-[1440px] mx-auto">
                <div className="text-center mb-10">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 inline-block">
                        <EditableText value={content.location.subtitle} onSave={v => update('location', 'subtitle', v)} isEditing={isEditing} />
                    </span>
                    <h3 className="font-serif-heading text-4xl md:text-5xl text-text-main dark:text-white">
                        <EditableText value={content.location.title} onSave={v => update('location', 'title', v)} isEditing={isEditing} />
                    </h3>
                </div>
                <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-2xl overflow-hidden border border-white/50 dark:border-white/5 flex flex-col-reverse lg:flex-row min-h-[600px]">
                    <div className="w-full lg:w-1/3 p-8 lg:p-12 flex flex-col relative z-10 border-r border-gray-100 dark:border-gray-800/50">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-primary lg:hidden"></div>
                        <div className="absolute top-0 left-0 h-full w-1.5 bg-primary hidden lg:block"></div>
                        <div className="space-y-8 mt-2">
                            <div>
                                <h4 className="font-serif-heading text-3xl text-text-main dark:text-white mb-2">The Hidden Gem</h4>
                                <div className="text-text-muted dark:text-gray-400">
                                    <EditableText tag="p" value={content.location.description} onSave={v => update('location', 'description', v)} isEditing={isEditing} />
                                </div>
                            </div>
                            <div className="space-y-6 py-6 border-y border-dashed border-gray-200 dark:border-gray-700">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0"><StorefrontIcon /></div>
                                    <div>
                                        <p className="font-bold text-xs uppercase tracking-wider text-text-muted mb-1">Address</p>
                                        <div className="text-xl text-text-main dark:text-white font-medium leading-tight whitespace-pre-line">
                                            <EditableText value={content.location.address} onSave={v => update('location', 'address', v)} isEditing={isEditing} />
                                        </div>
                                        <p className="text-sm text-primary mt-1 italic opacity-80 flex items-center gap-1">
                                            <VisibilityIcon /> Look for the wooden gate
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0"><ScheduleIcon /></div>
                                    <div>
                                        <p className="font-bold text-xs uppercase tracking-wider text-text-muted mb-1">Open Daily</p>
                                        <div className="text-xl text-text-main dark:text-white font-medium">
                                            <EditableText value={content.location.hours} onSave={v => update('location', 'hours', v)} isEditing={isEditing} />
                                        </div>
                                        <p className="text-sm text-text-muted dark:text-gray-400 mt-1">No appointment needed</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-auto pt-4">
                                <label className="block text-xs font-bold uppercase text-text-muted tracking-wider mb-2" htmlFor="start-location">Get Directions From:</label>
                                <form action="https://www.google.com/maps/dir/" className="flex flex-col gap-3" method="get" target="_blank">
                                    <input name="api" type="hidden" value="1"/>
                                    <input name="destination" type="hidden" value="45/3 An Hai Dong 1, Son Tra, Da Nang"/>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><MyLocationIcon /></div>
                                        <input className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-lg leading-5 bg-white dark:bg-black/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm dark:text-white transition-all" id="start-location" name="origin" placeholder="Enter your location..." type="text"/>
                                    </div>
                                    <button className="group flex items-center justify-center gap-2 w-full px-6 py-4 bg-text-main dark:bg-white text-white dark:text-text-main font-bold rounded-lg hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white transition-all duration-300 shadow-lg hover:shadow-primary/30" type="submit">
                                        Get Directions
                                        <span className="text-lg group-hover:translate-x-1 transition-transform"><ArrowForwardIcon /></span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/3 bg-gray-100 relative h-[400px] lg:h-auto overflow-hidden group">
                        <iframe allowFullScreen className="grayscale-[100%] group-hover:grayscale-0 transition-all duration-1000 ease-in-out absolute inset-0 w-full h-full" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.103758369658!2d108.23788231536768!3d16.059882988886673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142177f2ced6d8b%3A0xeac35f2960ca74a4!2sAn%20H%E1%BA%A3i%20%C4%90%C3%B4ng%201%2C%20S%C6%A1n%20Tr%C3%A0%2C%20Da%20Nang%20550000%2C%20Vietnam!5e0!3m2!1sen!2s!4v1647852392453!5m2!1sen!2s" style={{border:0}} title="Yen May Vintage Location" width="100%"></iframe>
                        <div className="absolute inset-0 bg-primary/10 pointer-events-none group-hover:bg-transparent transition-colors duration-500"></div>
                        <div className="absolute bottom-6 right-6 bg-white dark:bg-surface-dark p-3 rounded-lg shadow-lg max-w-xs transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                            <p className="text-xs font-bold text-text-muted uppercase mb-1">Parking</p>
                            <p className="text-sm dark:text-white">Free motorbike parking available right in front of the gate.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="bg-white dark:bg-black pt-16 pb-8 border-t border-gray-100 dark:border-gray-900 w-full relative">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-8 flex flex-col items-center text-center relative z-10">
                <div className="mb-8 flex flex-col items-center justify-center gap-0 leading-none group">
                    <span className="font-serif-heading text-4xl font-light text-text-main dark:text-white tracking-normal">Yen May</span>
                    <span className="font-sans text-xs tracking-[0.3em] text-text-muted dark:text-primary/80 uppercase font-light mt-0 group-hover:text-primary transition-colors duration-300">Vintage</span>
                </div>
                <p className="text-lg font-serif-heading italic text-text-muted dark:text-gray-400 mb-10 max-w-md">
                    "We do the hard work, so you can enjoy the fashion."
                </p>
                <div className="grid md:grid-cols-3 gap-8 w-full max-w-4xl border-t border-gray-100 dark:border-gray-800 py-10">
                    <div className="flex flex-col items-center gap-2">
                        <LocationOnIcon />
                        <h4 className="font-bold text-sm uppercase tracking-wider text-text-main dark:text-white">Visit Us</h4>
                        <p className="text-sm text-text-muted dark:text-gray-500">45/3 An Hai Dong 1 Street,<br/>Son Tra, Da Nang City</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <AlternateEmailIcon />
                        <h4 className="font-bold text-sm uppercase tracking-wider text-text-main dark:text-white">Connect</h4>
                        <a className="text-sm text-text-muted dark:text-gray-500 hover:text-primary" href="#">@yenmayvintage</a>
                        <p className="text-sm text-text-muted dark:text-gray-500">DM for inquiries</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <ScheduleIcon />
                        <h4 className="font-bold text-sm uppercase tracking-wider text-text-main dark:text-white">Hours</h4>
                        <p className="text-sm text-text-muted dark:text-gray-500">Daily: 10:00 AM - 9:00 PM</p>
                    </div>
                </div>
                <div className="w-full flex justify-between items-center text-xs text-gray-400 mt-8 pt-6 border-t border-gray-100 dark:border-gray-900">
                    <span>© 2024 Yen May Vintage. All rights reserved.</span>
                    <a className="inline-flex items-center gap-1 text-primary hover:text-text-main dark:hover:text-white transition-colors text-xs font-bold uppercase tracking-widest group" href="#top">
                        Back to Top
                        <NorthIcon />
                    </a>
                </div>
            </div>
        </footer>

        <a className="fixed bottom-6 right-6 md:hidden bg-primary text-white p-4 rounded-full shadow-xl z-50 flex items-center justify-center animate-bounce-slow" href="#">
            <ChatBubbleIcon />
        </a>

      </main>
    </div>
  );
};

export default App;