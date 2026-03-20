import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutAssemblyCalls extends Struct.ComponentSchema {
  collectionName: 'components_layout_assembly_calls';
  info: {
    displayName: 'Assembly Calls';
  };
  attributes: {
    Condition: Schema.Attribute.Enumeration<['Open', 'Closed']>;
    Date: Schema.Attribute.Date;
    File: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Time: Schema.Attribute.Time;
    Title: Schema.Attribute.String;
    Type: Schema.Attribute.Enumeration<['Ordinaria', 'Extraordinaria']>;
  };
}

export interface LayoutCorporateMembers extends Struct.ComponentSchema {
  collectionName: 'components_layout_corporate_members';
  info: {
    displayName: 'Corporate Members';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    Name: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface LayoutDepartaments extends Struct.ComponentSchema {
  collectionName: 'components_layout_departaments';
  info: {
    displayName: 'Departaments';
  };
  attributes: {
    Email: Schema.Attribute.Email;
    Name: Schema.Attribute.String;
    PhoneLink: Schema.Attribute.String;
    PhoneText: Schema.Attribute.String;
  };
}

export interface LayoutHeroSlide extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_slides';
  info: {
    displayName: 'HeroSlide';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Subtitle: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface LayoutHistoryBlocks extends Struct.ComponentSchema {
  collectionName: 'components_layout_history_blocks';
  info: {
    displayName: 'HistoryBlock';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
    Year: Schema.Attribute.String;
  };
}

export interface LayoutOtrosActivos extends Struct.ComponentSchema {
  collectionName: 'components_layout_otros_activos';
  info: {
    displayName: 'Otros Activos';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Location: Schema.Attribute.Text;
    Name: Schema.Attribute.String;
    Type: Schema.Attribute.String;
  };
}

export interface LayoutUrbanProjects extends Struct.ComponentSchema {
  collectionName: 'components_layout_urban_projects';
  info: {
    displayName: 'Urban Projects';
  };
  attributes: {
    Condition: Schema.Attribute.Enumeration<
      ['Terminado', 'En Desarrollo', 'Pr\u00F3ximamente']
    >;
    Description: Schema.Attribute.Text;
    Images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Location: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface MallDetailsContact extends Struct.ComponentSchema {
  collectionName: 'components_mall_details_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    Email: Schema.Attribute.Email;
    Instagram: Schema.Attribute.String;
    OpeningHours: Schema.Attribute.String;
    Phone: Schema.Attribute.String;
    PhoneUrl: Schema.Attribute.String;
    Website: Schema.Attribute.String;
  };
}

export interface MallDetailsManager extends Struct.ComponentSchema {
  collectionName: 'components_mall_details_managers';
  info: {
    displayName: 'Manager';
  };
  attributes: {
    Email: Schema.Attribute.Email;
    Name: Schema.Attribute.String;
    Photo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Role: Schema.Attribute.String;
  };
}

export interface MallDetailsPerformance extends Struct.ComponentSchema {
  collectionName: 'components_mall_details_performances';
  info: {
    displayName: 'Performance';
  };
  attributes: {
    AnnualVisitors: Schema.Attribute.String;
    OpeningYear: Schema.Attribute.String;
    SocialFollowers: Schema.Attribute.String;
  };
}

export interface MallDetailsStats extends Struct.ComponentSchema {
  collectionName: 'components_mall_details_stats';
  info: {
    displayName: 'Stats';
  };
  attributes: {
    ParkingSpots: Schema.Attribute.Integer;
    Restaurants: Schema.Attribute.Integer;
    Stores: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.assembly-calls': LayoutAssemblyCalls;
      'layout.corporate-members': LayoutCorporateMembers;
      'layout.departaments': LayoutDepartaments;
      'layout.hero-slide': LayoutHeroSlide;
      'layout.history-blocks': LayoutHistoryBlocks;
      'layout.otros-activos': LayoutOtrosActivos;
      'layout.urban-projects': LayoutUrbanProjects;
      'mall-details.contact': MallDetailsContact;
      'mall-details.manager': MallDetailsManager;
      'mall-details.performance': MallDetailsPerformance;
      'mall-details.stats': MallDetailsStats;
    }
  }
}
