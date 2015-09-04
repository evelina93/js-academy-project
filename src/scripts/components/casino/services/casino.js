export default angular.module('casino.services.casino', [])
    .factory('casinoService', ['emWebApi', function (emWebApi) {
        return {

            FIELDS: {
                Slug: 1,
                Vendor: 2,
                Name: 4,
                ShortName: 8,
                Description: 16,
                AnonymousFunMode: 32,
                FunMode: 64,
                RealMode: 128,
                NewGame: 256,
                License: 512,
                Popularity: 1024,
                Width: 2048,
                Height: 4096,
                Thumbnail: 8192,
                Logo: 16384,
                BackgroundImage: 32768,
                Url: 65536,
                HelpUrl: 131072,
                Categories: 262144,
                Tags: 524288,
                Platforms: 1048576,
                RestrictedTerritories: 2097152,
                TheoreticalPayOut: 4194304,
                BonusContribution: 8388608,
                JackpotContribution: 16777216,
                FPP: 33554432,
                Currencies: 8589934592
            },

            getGames: function (parameters) {

                return emWebApi.call('/casino#getGames', parameters);
            }
        }
    }])