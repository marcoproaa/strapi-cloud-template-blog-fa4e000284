import type { Schema, Struct } from '@strapi/strapi';

export interface FaqFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_faq_faq_items';
  info: {
    displayName: 'FAQ Item';
  };
  attributes: {
    answer: Schema.Attribute.Blocks & Schema.Attribute.Required;
    question: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface HomeArticleStrip extends Struct.ComponentSchema {
  collectionName: 'components_home_article_strips';
  info: {
    displayName: 'article_strip';
  };
  attributes: {
    auto_content_type: Schema.Attribute.Enumeration<['news', 'guide']>;
    auto_limit: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<3>;
    auto_sort: Schema.Attribute.Enumeration<['date_desc', 'date_asc']>;
    auto_tags: Schema.Attribute.String;
    items: Schema.Attribute.Component<'home.article-teaser', true>;
    mode: Schema.Attribute.Enumeration<['manual', 'auto']>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeArticleTeaser extends Struct.ComponentSchema {
  collectionName: 'components_home_article_teasers';
  info: {
    displayName: 'article_teaser';
  };
  attributes: {
    guide: Schema.Attribute.Relation<'oneToOne', 'api::guide.guide'>;
    link_override: Schema.Attribute.String;
    media_override: Schema.Attribute.Component<'shared.media', false>;
    news: Schema.Attribute.Relation<'oneToOne', 'api::new.new'>;
    title_override: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['news', 'guide', 'custom']>;
  };
}

export interface HomeBettingWidget extends Struct.ComponentSchema {
  collectionName: 'components_home_betting_widgets';
  info: {
    displayName: 'betting_widget';
  };
  attributes: {
    global_cta_label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Ver todas'>;
    global_cta_url: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'/casas-de-apuestas'>;
    limit: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      > &
      Schema.Attribute.DefaultTo<5>;
    notes_smallprint: Schema.Attribute.Text;
    show_global_cta: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    source_list: Schema.Attribute.Relation<'oneToOne', 'api::list.list'>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Mejores Casas de Apuestas'>;
  };
}

export interface HomeCtaBanner extends Struct.ComponentSchema {
  collectionName: 'components_home_cta_banners';
  info: {
    displayName: 'cta_banner';
  };
  attributes: {
    button_label: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeSpotlightCard extends Struct.ComponentSchema {
  collectionName: 'components_home_spotlight_cards';
  info: {
    displayName: 'spotlight_card';
  };
  attributes: {
    badge: Schema.Attribute.String;
    guide: Schema.Attribute.Relation<'oneToOne', 'api::guide.guide'>;
    link_override: Schema.Attribute.String;
    media_override: Schema.Attribute.Component<'shared.media', false>;
    news: Schema.Attribute.Relation<'oneToOne', 'api::new.new'>;
    subtitle_override: Schema.Attribute.Text;
    title_override: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['news', 'guide', 'custom']> &
      Schema.Attribute.DefaultTo<'news'>;
  };
}

export interface HomeToolItem extends Struct.ComponentSchema {
  collectionName: 'components_home_tool_items';
  info: {
    displayName: 'tool_item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface HomeToolsGrid extends Struct.ComponentSchema {
  collectionName: 'components_home_tools_grids';
  info: {
    displayName: 'tools_grid';
  };
  attributes: {
    items: Schema.Attribute.Component<'home.tool-item', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListsListEntry extends Struct.ComponentSchema {
  collectionName: 'components_lists_list_entries';
  info: {
    displayName: 'list_entry';
  };
  attributes: {
    badge: Schema.Attribute.Enumeration<['Top', 'Nuevo', 'Exclusivo']>;
    bookmaker: Schema.Attribute.Relation<
      'oneToOne',
      'api::bookmaker.bookmaker'
    >;
    cta_label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Ir a la oferta'>;
    deeplink_override: Schema.Attribute.String;
    notes_tc: Schema.Attribute.Text;
    offer_override: Schema.Attribute.Text;
    pinned: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    secondary_text: Schema.Attribute.Text;
  };
}

export interface ListsSmartConfig extends Struct.ComponentSchema {
  collectionName: 'components_lists_smart_configs';
  info: {
    displayName: 'smart_config';
  };
  attributes: {
    default_offer_prefix: Schema.Attribute.String;
    filter: Schema.Attribute.Component<'rules.bookmaker-filter', false> &
      Schema.Attribute.Required;
    limit: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<10>;
    respect_pinned_from_manual: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    sort: Schema.Attribute.Enumeration<
      ['rating_desc', 'name_asc', 'created_desc']
    >;
  };
}

export interface RulesBookmakerFilter extends Struct.ComponentSchema {
  collectionName: 'components_rules_bookmaker_filters';
  info: {
    displayName: 'bookmaker_filter';
  };
  attributes: {
    any_of_features: Schema.Attribute.Relation<
      'oneToMany',
      'api::feature-tag.feature-tag'
    >;
    country_code: Schema.Attribute.String;
    has_android_app: Schema.Attribute.Boolean;
    has_cashout: Schema.Attribute.Boolean;
    has_ios_app: Schema.Attribute.Boolean;
    has_live_betting: Schema.Attribute.Boolean;
    min_rating: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 10;
          min: 0;
        },
        number
      >;
    must_have_features: Schema.Attribute.Relation<
      'oneToMany',
      'api::feature-tag.feature-tag'
    >;
    payment_methods_any: Schema.Attribute.Relation<
      'oneToMany',
      'api::payment-method.payment-method'
    >;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'media_image';
    icon: 'file-video';
  };
  attributes: {
    alt: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    canonical: Schema.Attribute.String;
    meta_description: Schema.Attribute.Text & Schema.Attribute.Required;
    meta_title: Schema.Attribute.String & Schema.Attribute.Required;
    noindex: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    og_image: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'faq.faq-item': FaqFaqItem;
      'home.article-strip': HomeArticleStrip;
      'home.article-teaser': HomeArticleTeaser;
      'home.betting-widget': HomeBettingWidget;
      'home.cta-banner': HomeCtaBanner;
      'home.spotlight-card': HomeSpotlightCard;
      'home.tool-item': HomeToolItem;
      'home.tools-grid': HomeToolsGrid;
      'lists.list-entry': ListsListEntry;
      'lists.smart-config': ListsSmartConfig;
      'rules.bookmaker-filter': RulesBookmakerFilter;
      'shared.media': SharedMedia;
      'shared.seo': SharedSeo;
    }
  }
}
