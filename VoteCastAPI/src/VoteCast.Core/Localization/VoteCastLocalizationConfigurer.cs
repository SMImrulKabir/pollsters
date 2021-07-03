using Abp.Configuration.Startup;
using Abp.Localization.Dictionaries;
using Abp.Localization.Dictionaries.Xml;
using Abp.Reflection.Extensions;

namespace VoteCast.Localization
{
    public static class VoteCastLocalizationConfigurer
    {
        public static void Configure(ILocalizationConfiguration localizationConfiguration)
        {
            localizationConfiguration.Sources.Add(
                new DictionaryBasedLocalizationSource(VoteCastConsts.LocalizationSourceName,
                    new XmlEmbeddedFileLocalizationDictionaryProvider(
                        typeof(VoteCastLocalizationConfigurer).GetAssembly(),
                        "VoteCast.Localization.SourceFiles"
                    )
                )
            );
        }
    }
}
