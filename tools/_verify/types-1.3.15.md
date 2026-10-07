# 类型普查 types-1.3.15

- 脚本：`node tools/coverage-census.mjs 1.3.15`（只读，仅写 `tools/_verify/`）
- 来源 A（正则抽取）：`C:\WorkSpace\Bannerlord\bannerlord-1.3.15` 下全部 `*.cs` 中的 public 类型（class/interface/struct/enum/delegate，含嵌套 public 类型）
- 来源 B（classes.json）：`C:\WorkSpace\Bannerlord\classes.json`（25 条样本）
- 匹配规则：namespace + name

## 关键数字（每个数字附「量它的命令」）

| 指标 | 值 | 量它的命令 |
|---|---:|---|
| 扫描 .cs 文件数 | 5208 | `find "C:\WorkSpace\Bannerlord\bannerlord-1.3.15" -name "*.cs" -type f | wc -l` |
| 来源 A public 类型声明总数 sourceACount | 7853 | `node -e "console.log(require('./tools/_verify/types-1.3.15.json').sourceACount)"` |
| 去重后 namespace+name 数 uniqueTypeCount | 5444 | `node -e "console.log(require('./tools/_verify/types-1.3.15.json').uniqueTypeCount)"` |
| namespace 数 | 333 | `node -e "console.log(require('./tools/_verify/types-1.3.15.json').namespaces.length)"` |
| 来源 B 条目数 sourceBCount | 25 | `node -e "console.log(require('C:\WorkSpace\Bannerlord\classes.json').length)"` |
| 两来源不一致条目数 disagreementCount | 5421 | `node -e "console.log(require('./tools/_verify/types-1.3.15.json').disagreementCount)"` |
| 读取失败文件数 | 0 | `node -e "console.log(require('./tools/_verify/types-1.3.15.json').readErrors)"` |

### 按 kind 分解（来源 A）

| kind | 数量 |
|---|---:|
| class | 4256 |
| interface | 245 |
| struct | 289 |
| enum | 583 |
| delegate | 2480 |

## 按 namespace 分组计数（来源 A，按类型数降序）

| namespace | types |
|---|---:|
| ManagedCallbacks | 2256 |
| TaleWorlds.MountAndBlade | 805 |
| TaleWorlds.Core | 272 |
| TaleWorlds.Library | 185 |
| TaleWorlds.CampaignSystem.CampaignBehaviors | 161 |
| TaleWorlds.CampaignSystem.Issues | 159 |
| NetworkMessages.FromServer | 157 |
| TaleWorlds.CampaignSystem | 151 |
| TaleWorlds.CampaignSystem.ComponentInterfaces | 141 |
| TaleWorlds.Engine | 135 |
| TaleWorlds.CampaignSystem.GameComponents | 125 |
| TaleWorlds.MountAndBlade.Diamond | 119 |
| Messages.FromClient.ToLobbyServer | 102 |
| TaleWorlds.CampaignSystem.Conversation.Tags | 97 |
| Messages.FromLobbyServer.ToClient | 89 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets | 81 |
| TaleWorlds.CampaignSystem.Actions | 75 |
| TaleWorlds.GauntletUI | 59 |
| NetworkMessages.FromClient | 56 |
| TaleWorlds.CampaignSystem.LogEntries | 56 |
| TaleWorlds.TwoDimension | 51 |
| Helpers | 45 |
| TaleWorlds.Network | 43 |
| TaleWorlds.Diamond | 37 |
| TaleWorlds.CampaignSystem.Party | 35 |
| TaleWorlds.CampaignSystem.ViewModelCollection | 35 |
| TaleWorlds.DotNet | 34 |
| TaleWorlds.TwoDimension.Standalone.Native.OpenGL | 34 |
| TaleWorlds.CampaignSystem.GameState | 32 |
| TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories | 31 |
| TaleWorlds.GauntletUI.BaseTypes | 31 |
| TaleWorlds.CampaignSystem.CharacterDevelopment | 30 |
| JetBrains.Annotations | 29 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes | 29 |
| TaleWorlds.CampaignSystem.Election | 28 |
| TaleWorlds.CampaignSystem.SceneInformationPopupTypes | 28 |
| TaleWorlds.CampaignSystem.MapNotificationTypes | 27 |
| TaleWorlds.GauntletUI.PrefabSystem | 27 |
| TaleWorlds.SaveSystem | 27 |
| TaleWorlds.TwoDimension.Standalone.Native.Windows | 27 |
| TaleWorlds.GauntletUI.ExtraWidgets | 26 |
| TaleWorlds.CampaignSystem.CharacterCreationContent | 25 |
| TaleWorlds.CampaignSystem.GameMenus | 25 |
| TaleWorlds.MountAndBlade.Launcher.Library | 25 |
| TaleWorlds.MountAndBlade.ViewModelCollection.Order | 24 |
| TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement | 23 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Inventory | 22 |
| TaleWorlds.CampaignSystem.Settlements | 21 |
| TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign | 20 |
| TaleWorlds.InputSystem | 20 |
| TaleWorlds.CampaignSystem.Conversation | 19 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission | 19 |
| TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard | 19 |
| psai.net | 19 |
| TaleWorlds.GauntletUI.CodeGenerator | 18 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby | 18 |
| TaleWorlds.PlatformService | 18 |
| TaleWorlds.SaveSystem.Definition | 18 |
| TaleWorlds.CampaignSystem.CampaignBehaviors.CommentBehaviors | 17 |
| TaleWorlds.CampaignSystem.MapEvents | 17 |
| TaleWorlds.MountAndBlade.Objects.Siege | 17 |
| TaleWorlds.ObjectSystem | 17 |
| Messages.FromBattleServer.ToBattleServerManager | 16 |
| TaleWorlds.MountAndBlade.ComponentInterfaces | 16 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial | 16 |
| TaleWorlds.CampaignSystem.BarterSystem.Barterables | 15 |
| TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement | 15 |
| TaleWorlds.GauntletUI.Data | 15 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory | 15 |
| TaleWorlds.MountAndBlade.ViewModelCollection.HUD | 15 |
| TaleWorlds.TwoDimension.Standalone | 15 |
| TaleWorlds.CampaignSystem.Siege | 14 |
| TaleWorlds.Diamond.Rest | 14 |
| TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions | 14 |
| TaleWorlds.PlatformService.GOG | 14 |
| TaleWorlds.ScreenSystem | 14 |
| TaleWorlds.CampaignSystem.BarterSystem | 13 |
| TaleWorlds.CampaignSystem.Encyclopedia.Pages | 13 |
| TaleWorlds.CampaignSystem.Inventory | 13 |
| TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation | 13 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages | 13 |
| TaleWorlds.Core.ViewModelCollection | 13 |
| TaleWorlds.Engine.Options | 13 |
| TaleWorlds.Library.CodeGeneration | 13 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party | 13 |
| TaleWorlds.CampaignSystem.Party.PartyComponents | 12 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia | 12 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items | 12 |
| TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement | 12 |
| TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes | 12 |
| TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements | 12 |
| TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges | 12 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer | 12 |
| Messages.FromCustomBattleServer.ToCustomBattleServerManager | 11 |
| TaleWorlds.CampaignSystem.TournamentGames | 11 |
| TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies | 11 |
| TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy | 11 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Party | 11 |
| TaleWorlds.Core.ViewModelCollection.Information | 11 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper | 11 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting | 11 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement | 11 |
| TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual | 11 |
| TaleWorlds.CampaignSystem.Settlements.Locations | 10 |
| TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay | 10 |
| TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans | 10 |
| TaleWorlds.GauntletUI.Layout | 10 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle | 10 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory | 10 |
| TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets | 10 |
| TaleWorlds.MountAndBlade.Source.Missions | 10 |
| TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle | 10 |
| TaleWorlds.PlayerServices.Avatar | 10 |
| psai.Editor | 10 |
| Messages.FromBattleServerManager.ToBattleServer | 9 |
| TaleWorlds.CampaignSystem.Encounters | 9 |
| TaleWorlds.CampaignSystem.Encyclopedia | 9 |
| TaleWorlds.CampaignSystem.Extensions | 9 |
| TaleWorlds.CampaignSystem.Map | 9 |
| TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper | 9 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List | 9 |
| TaleWorlds.ModuleManager | 9 |
| (global) | 8 |
| TaleWorlds.CampaignSystem.Conversation.Persuasion | 8 |
| TaleWorlds.CampaignSystem.Issues.IssueQuestTasks | 8 |
| TaleWorlds.CampaignSystem.SaveCompability | 8 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Education | 8 |
| TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard | 8 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Quests | 8 |
| TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting | 8 |
| TaleWorlds.Core.ViewModelCollection.Generic | 8 |
| TaleWorlds.Engine.GauntletUI | 8 |
| TaleWorlds.Localization | 8 |
| TaleWorlds.Localization.TextProcessor.LanguageProcessors | 8 |
| TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData | 8 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia | 8 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom | 8 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar | 8 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.ClassLoadout | 8 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard | 8 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate | 8 |
| TaleWorlds.MountAndBlade.Objects | 8 |
| TaleWorlds.MountAndBlade.ViewModelCollection | 8 |
| Messages.FromCustomBattleServerManager.ToCustomBattleServer | 7 |
| TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors | 7 |
| TaleWorlds.CampaignSystem.CampaignBehaviors.BarterBehaviors | 7 |
| TaleWorlds.CampaignSystem.Roster | 7 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar | 7 |
| TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting | 7 |
| TaleWorlds.Core.ImageIdentifiers | 7 |
| TaleWorlds.Core.ViewModelCollection.ImageIdentifiers | 7 |
| TaleWorlds.Library.Http | 7 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan | 7 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay | 7 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker | 7 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order | 7 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Scoreboard | 7 |
| TaleWorlds.MountAndBlade.Launcher.Library.UserDatas | 7 |
| TaleWorlds.MountAndBlade.Objects.Usables | 7 |
| TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker | 7 |
| TaleWorlds.ActivitySystem | 6 |
| TaleWorlds.CampaignSystem.Settlements.Buildings | 6 |
| TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance | 6 |
| TaleWorlds.Diamond.ClientApplication | 6 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Conversation | 6 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege | 6 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD | 6 |
| TaleWorlds.MountAndBlade.Missions.Objectives | 6 |
| TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder | 6 |
| TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator | 6 |
| TaleWorlds.PlatformService.Steam | 6 |
| TaleWorlds.SaveSystem.Load | 6 |
| TaleWorlds.SaveSystem.Save | 6 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Conversation | 5 |
| TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu | 5 |
| TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Events | 5 |
| TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement | 5 |
| TaleWorlds.Localization.TextProcessor | 5 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information | 5 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.KillFeed | 5 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options.Gamepad | 5 |
| TaleWorlds.MountAndBlade.MissionRepresentatives | 5 |
| TaleWorlds.MountAndBlade.Network.Messages | 5 |
| TaleWorlds.MountAndBlade.SteamWorkshop | 5 |
| TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode | 5 |
| TaleWorlds.PlayerServices | 5 |
| TaleWorlds.ServiceDiscovery.Client | 5 |
| TaleWorlds.AchievementSystem | 4 |
| TaleWorlds.CampaignSystem.Incidents | 4 |
| TaleWorlds.CampaignSystem.Map.DistanceCache | 4 |
| TaleWorlds.CampaignSystem.Naval | 4 |
| TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper.PerkSelection | 4 |
| TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment | 4 |
| TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions | 4 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp | 4 |
| TaleWorlds.GauntletUI.GamepadNavigation | 4 |
| TaleWorlds.Library.NewsManager | 4 |
| TaleWorlds.MountAndBlade.Diamond.Cosmetics | 4 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter | 4 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat | 4 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options | 4 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Quest | 4 |
| TaleWorlds.MountAndBlade.MissionSpawnHandlers | 4 |
| TaleWorlds.MountAndBlade.Missions | 4 |
| TaleWorlds.MountAndBlade.Options | 4 |
| TaleWorlds.MountAndBlade.Options.ManagedOptions | 4 |
| TaleWorlds.MountAndBlade.Source.Missions.Handlers | 4 |
| TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries | 4 |
| TaleWorlds.PlatformService.Epic | 4 |
| TaleWorlds.CampaignSystem.AgentOrigins | 3 |
| TaleWorlds.CampaignSystem.Settlements.Workshops | 3 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Barter | 3 |
| TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection | 3 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup | 3 |
| TaleWorlds.Core.ViewModelCollection.BannerEditor | 3 |
| TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip | 3 |
| TaleWorlds.Engine.InputSystem | 3 |
| TaleWorlds.GauntletUI.ExtraWidgets.Graph | 3 |
| TaleWorlds.Library.EventSystem | 3 |
| TaleWorlds.Library.Graph | 3 |
| TaleWorlds.MountAndBlade.Diamond.Cosmetics.CosmeticTypes | 3 |
| TaleWorlds.MountAndBlade.Diamond.Lobby | 3 |
| TaleWorlds.MountAndBlade.Diamond.Ranked | 3 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation.Culture | 3 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Credits | 3 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu | 3 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameOver | 3 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.GatherArmy | 3 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information.RundownTooltip | 3 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map | 3 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.FlagMarker | 3 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Friend | 3 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Perks | 3 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tournament | 3 |
| TaleWorlds.MountAndBlade.Missions.MissionLogics | 3 |
| TaleWorlds.MountAndBlade.Network | 3 |
| TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic | 3 |
| TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu | 3 |
| TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys | 3 |
| TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems | 3 |
| TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective | 3 |
| TaleWorlds.SaveSystem.Resolvers | 3 |
| TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers | 2 |
| TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Supporters | 2 |
| TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Policies | 2 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup | 2 |
| TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement | 2 |
| TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order | 2 |
| TaleWorlds.Core.ViewModelCollection.Selector | 2 |
| TaleWorlds.Core.ViewModelCollection.Tutorial | 2 |
| TaleWorlds.Diamond.Socket | 2 |
| TaleWorlds.GauntletUI.GauntletInput | 2 |
| TaleWorlds.LinQuick | 2 |
| TaleWorlds.MountAndBlade.DividableTasks | 2 |
| TaleWorlds.MountAndBlade.GameKeyCategory | 2 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation | 2 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapConversation | 2 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Menu.TownManagement | 2 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Notification | 2 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.DamageFeed | 2 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.KillFeed.General | 2 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.KillFeed.Personal | 2 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.Radial | 2 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.AdminMessage | 2 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Matchmaking | 2 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Popup | 2 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.SaveLoad | 2 |
| TaleWorlds.MountAndBlade.Missions.Handlers | 2 |
| TaleWorlds.MountAndBlade.Missions.Multiplayer | 2 |
| TaleWorlds.MountAndBlade.Source.Objects | 2 |
| TaleWorlds.MountAndBlade.Source.Objects.Siege | 2 |
| TaleWorlds.MountAndBlade.ViewModelCollection.Credits | 2 |
| TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.AuxiliaryKeys | 2 |
| TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GamepadOptions | 2 |
| TaleWorlds.MountAndBlade.ViewModelCollection.HUD.Compass | 2 |
| TaleWorlds.MountAndBlade.ViewModelCollection.HUD.DamageFeed | 2 |
| TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.General | 2 |
| TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal | 2 |
| TaleWorlds.MountAndBlade.ViewModelCollection.InitialMenu | 2 |
| TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction | 2 |
| TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer | 2 |
| MBHelpers | 1 |
| Messages.BattleServerManager.BattleServerManager | 1 |
| Messages.FromLobbyServer.ToLobbyServer | 1 |
| SandBox | 1 |
| Sandbox.View.GameStates | 1 |
| TaleWorlds.Avatar.PlayerServices | 1 |
| TaleWorlds.CampaignSystem.CraftingSystem | 1 |
| TaleWorlds.CampaignSystem.Handlers | 1 |
| TaleWorlds.CampaignSystem.TroopSuppliers | 1 |
| TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation.OptionsStage | 1 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Input | 1 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Map | 1 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapConversation | 1 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Map.Parley | 1 |
| TaleWorlds.Core.SaveCompability | 1 |
| TaleWorlds.Diamond.AccessProvider.GDK | 1 |
| TaleWorlds.Diamond.AccessProvider.GOG | 1 |
| TaleWorlds.Diamond.AccessProvider.Steam | 1 |
| TaleWorlds.Diamond.AccessProvider.Test | 1 |
| TaleWorlds.Engine.Screens | 1 |
| TaleWorlds.Library.Information | 1 |
| TaleWorlds.MountAndBlade.AI | 1 |
| TaleWorlds.MountAndBlade.AI.AgentComponents | 1 |
| TaleWorlds.MountAndBlade.Diamond.Messages.FromLobbyServer.ToClient | 1 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.BannerBuilder | 1 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.BoardGame | 1 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation.Options | 1 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.CustomBattle | 1 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.EscapeMenu | 1 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Loading | 1 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapEvents | 1 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Menu.Overlay | 1 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Parley | 1 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.MapBar | 1 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Recruitment | 1 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.Conversation | 1 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.Disguise | 1 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.MainAgentControlMode | 1 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.Order | 1 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Clan | 1 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Home | 1 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate.Notifications | 1 |
| TaleWorlds.MountAndBlade.Launcher | 1 |
| TaleWorlds.MountAndBlade.Launcher.Steam | 1 |
| TaleWorlds.MountAndBlade.Missions.Hints | 1 |
| TaleWorlds.MountAndBlade.Multiplayer.Test | 1 |
| TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions | 1 |
| TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed | 1 |
| TaleWorlds.MountAndBlade.ViewModelCollection.Input | 1 |
| TaleWorlds.MountAndBlade.ViewModelCollection.ProfileSelection | 1 |
| TaleWorlds.MountAndBlade.ViewModelCollection.VideoPlayback | 1 |
| TaleWorlds.Starter.Library | 1 |

## 两来源不一致

不一致总数：**5421** = classes.json 有但来源 A 没有（1 条，全列于下）+ 来源 A 有但 classes.json 没有（5420 条，仅报数量——classes.json 只有 25 条样本，不逐条列出）。

### classes.json 有但来源 A 没有（1 条）

| namespace | name | classes.json 中的 file |
|---|---|---|
| TaleWorlds.SaveSystem | AutoGeneratedSaveManager | ./TaleWorlds.SaveSystem/AutoGeneratedSaveManager.cs |

### 来源 A 有但 classes.json 没有

数量：**5420** 条（仅报数量，不报全列）。

## 复现命令

```bash
node tools/coverage-census.mjs 1.3.15
find "C:\WorkSpace\Bannerlord\bannerlord-1.3.15" -name "*.cs" -type f | wc -l
node -e "console.log(require('C:\WorkSpace\Bannerlord\classes.json').length)"
node -e "console.log(require('./tools/_verify/types-1.3.15.json').sourceACount)"
node -e "console.log(require('./tools/_verify/types-1.3.15.json').disagreementCount)"
```
