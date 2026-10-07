# 类型普查 types-1.3.0

- 脚本：`node tools/coverage-census.mjs 1.3.0`（只读，仅写 `tools/_verify/`）
- 来源 A（正则抽取）：`C:\WorkSpace\Bannerlord\bannerlord-1.3.0` 下全部 `*.cs` 中的 public 类型（class/interface/struct/enum/delegate，含嵌套 public 类型）
- 来源 B（classes.json）：`C:\WorkSpace\Bannerlord\classes.json`（25 条样本）
- 匹配规则：namespace + name

## 关键数字（每个数字附「量它的命令」）

| 指标 | 值 | 量它的命令 |
|---|---:|---|
| 扫描 .cs 文件数 | 4596 | `find "C:\WorkSpace\Bannerlord\bannerlord-1.3.0" -name "*.cs" -type f | wc -l` |
| 来源 A public 类型声明总数 sourceACount | 5254 | `node -e "console.log(require('./tools/_verify/types-1.3.0.json').sourceACount)"` |
| 去重后 namespace+name 数 uniqueTypeCount | 5095 | `node -e "console.log(require('./tools/_verify/types-1.3.0.json').uniqueTypeCount)"` |
| namespace 数 | 304 | `node -e "console.log(require('./tools/_verify/types-1.3.0.json').namespaces.length)"` |
| 来源 B 条目数 sourceBCount | 25 | `node -e "console.log(require('C:\WorkSpace\Bannerlord\classes.json').length)"` |
| 两来源不一致条目数 disagreementCount | 5076 | `node -e "console.log(require('./tools/_verify/types-1.3.0.json').disagreementCount)"` |
| 读取失败文件数 | 0 | `node -e "console.log(require('./tools/_verify/types-1.3.0.json').readErrors)"` |

### 按 kind 分解（来源 A）

| kind | 数量 |
|---|---:|
| class | 4076 |
| interface | 222 |
| struct | 265 |
| enum | 517 |
| delegate | 174 |

## 按 namespace 分组计数（来源 A，按类型数降序）

| namespace | types |
|---|---:|
| TaleWorlds.MountAndBlade | 805 |
| TaleWorlds.Core | 264 |
| TaleWorlds.Library | 183 |
| TaleWorlds.CampaignSystem.CampaignBehaviors | 161 |
| TaleWorlds.CampaignSystem.Issues | 159 |
| NetworkMessages.FromServer | 158 |
| TaleWorlds.CampaignSystem | 153 |
| TaleWorlds.CampaignSystem.ComponentInterfaces | 141 |
| TaleWorlds.Engine | 134 |
| TaleWorlds.CampaignSystem.GameComponents | 125 |
| TaleWorlds.CampaignSystem.Conversation.Tags | 97 |
| TaleWorlds.CampaignSystem.Actions | 75 |
| StoryMode.GauntletUI.Tutorial | 69 |
| SandBox.Missions.MissionLogics | 58 |
| NetworkMessages.FromClient | 56 |
| TaleWorlds.CampaignSystem.LogEntries | 56 |
| TaleWorlds.GauntletUI | 54 |
| Helpers | 45 |
| TaleWorlds.MountAndBlade.View | 45 |
| SandBox | 44 |
| SandBox.View.Map | 44 |
| TaleWorlds.Diamond | 37 |
| TaleWorlds.CampaignSystem.Party | 35 |
| TaleWorlds.CampaignSystem.ViewModelCollection | 35 |
| TaleWorlds.MountAndBlade.View.MissionViews | 35 |
| TaleWorlds.CampaignSystem.GameState | 32 |
| TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories | 31 |
| TaleWorlds.GauntletUI.BaseTypes | 31 |
| SandBox.Issues | 30 |
| TaleWorlds.CampaignSystem.CharacterDevelopment | 30 |
| JetBrains.Annotations | 29 |
| TaleWorlds.CampaignSystem.Election | 28 |
| TaleWorlds.CampaignSystem.SceneInformationPopupTypes | 28 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes | 28 |
| TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer | 28 |
| SandBox.BoardGames | 27 |
| TaleWorlds.GauntletUI.PrefabSystem | 27 |
| TaleWorlds.CampaignSystem.MapNotificationTypes | 26 |
| SandBox.CampaignBehaviors | 25 |
| SandBox.GauntletUI.Map | 25 |
| TaleWorlds.CampaignSystem.CharacterCreationContent | 25 |
| TaleWorlds.CampaignSystem.GameMenus | 25 |
| SandBox.Missions.AgentBehaviors | 24 |
| SandBox.View.Missions | 24 |
| TaleWorlds.GauntletUI.ExtraWidgets | 24 |
| TaleWorlds.MountAndBlade.GauntletUI | 24 |
| TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement | 23 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Inventory | 22 |
| TaleWorlds.CampaignSystem.Settlements | 21 |
| TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign | 20 |
| TaleWorlds.InputSystem | 20 |
| TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails | 20 |
| SandBox.Missions.MissionLogics.Hideout | 19 |
| TaleWorlds.CampaignSystem.Conversation | 19 |
| StoryMode.GameComponents | 18 |
| TaleWorlds.GauntletUI.CodeGenerator | 18 |
| TaleWorlds.MountAndBlade.View.Screens | 18 |
| TaleWorlds.CampaignSystem.CampaignBehaviors.CommentBehaviors | 17 |
| TaleWorlds.CampaignSystem.MapEvents | 17 |
| TaleWorlds.MountAndBlade.Objects.Siege | 17 |
| SandBox.ViewModelCollection.Nameplate | 16 |
| StoryMode | 16 |
| TaleWorlds.MountAndBlade.ComponentInterfaces | 16 |
| TaleWorlds.CampaignSystem.BarterSystem.Barterables | 15 |
| TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement | 15 |
| TaleWorlds.GauntletUI.Data | 15 |
| SandBox.GauntletUI | 14 |
| SandBox.Objects | 14 |
| TaleWorlds.CampaignSystem.Siege | 14 |
| TaleWorlds.Diamond.Rest | 14 |
| SandBox.GauntletUI.Missions | 13 |
| TaleWorlds.CampaignSystem.BarterSystem | 13 |
| TaleWorlds.CampaignSystem.Inventory | 13 |
| TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation | 13 |
| TaleWorlds.Core.ViewModelCollection | 13 |
| TaleWorlds.Engine.Options | 13 |
| TaleWorlds.Library.CodeGeneration | 13 |
| SandBox.Missions | 12 |
| TaleWorlds.CampaignSystem.Party.PartyComponents | 12 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia | 12 |
| TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement | 12 |
| TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes | 12 |
| TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements | 12 |
| TaleWorlds.MountAndBlade.GauntletUI.Mission | 12 |
| TaleWorlds.MountAndBlade.View.Scripts | 12 |
| SandBox.Objects.Usables | 11 |
| TaleWorlds.CampaignSystem.Encyclopedia.Pages | 11 |
| TaleWorlds.CampaignSystem.TournamentGames | 11 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages | 11 |
| TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies | 11 |
| TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy | 11 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Party | 11 |
| TaleWorlds.Core.ViewModelCollection.Information | 11 |
| TaleWorlds.GauntletUI.Canvas | 11 |
| TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer | 11 |
| SandBox.GameComponents | 10 |
| SandBox.View.Menu | 10 |
| StoryMode.GameComponents.CampaignBehaviors | 10 |
| StoryMode.Quests.FirstPhase | 10 |
| TaleWorlds.CampaignSystem.Settlements.Locations | 10 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items | 10 |
| TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay | 10 |
| TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans | 10 |
| TaleWorlds.GauntletUI.Layout | 10 |
| TaleWorlds.MountAndBlade.Source.Missions | 10 |
| SandBox.BoardGames.AI | 9 |
| SandBox.View | 9 |
| TaleWorlds.CampaignSystem.Encounters | 9 |
| TaleWorlds.CampaignSystem.Encyclopedia | 9 |
| TaleWorlds.CampaignSystem.Extensions | 9 |
| TaleWorlds.CampaignSystem.Map | 9 |
| TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper | 9 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List | 9 |
| TaleWorlds.Engine.GauntletUI | 9 |
| TaleWorlds.ModuleManager | 9 |
| SandBox.BoardGames.Pawns | 8 |
| SandBox.Tournaments.MissionLogics | 8 |
| SandBox.View.Map.Navigation.NavigationElements | 8 |
| SandBox.ViewModelCollection.MapSiege | 8 |
| SandBox.ViewModelCollection.Missions.NameMarker | 8 |
| SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes | 8 |
| StoryMode.Quests.SecondPhase | 8 |
| StoryMode.Quests.TutorialPhase | 8 |
| TaleWorlds.CampaignSystem.Conversation.Persuasion | 8 |
| TaleWorlds.CampaignSystem.Issues.IssueQuestTasks | 8 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Education | 8 |
| TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard | 8 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Quests | 8 |
| TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting | 8 |
| TaleWorlds.Core.ViewModelCollection.Generic | 8 |
| TaleWorlds.Localization | 8 |
| TaleWorlds.Localization.TextProcessor.LanguageProcessors | 8 |
| TaleWorlds.MountAndBlade.View.Tableaus | 8 |
| SandBox.GauntletUI.CharacterCreation | 7 |
| SandBox.GauntletUI.Menu | 7 |
| SandBox.ViewModelCollection | 7 |
| SandBox.ViewModelCollection.GameOver | 7 |
| SandBox.ViewModelCollection.Missions.NameMarker.Targets | 7 |
| SandBox.ViewModelCollection.SaveLoad | 7 |
| SandBox.ViewModelCollection.Tournament | 7 |
| TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors | 7 |
| TaleWorlds.CampaignSystem.CampaignBehaviors.BarterBehaviors | 7 |
| TaleWorlds.CampaignSystem.Roster | 7 |
| TaleWorlds.CampaignSystem.SaveCompability | 7 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar | 7 |
| TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting | 7 |
| TaleWorlds.Core.ImageIdentifiers | 7 |
| TaleWorlds.Core.ViewModelCollection.ImageIdentifiers | 7 |
| TaleWorlds.Library.Http | 7 |
| TaleWorlds.MountAndBlade.GauntletUI.TextureProviders | 7 |
| TaleWorlds.MountAndBlade.Objects | 7 |
| TaleWorlds.MountAndBlade.Objects.Usables | 7 |
| TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.MovementOrders | 7 |
| SandBox.View.Map.Managers | 6 |
| SandBox.View.Map.Visuals | 6 |
| SandBox.ViewModelCollection.Map.Tracker | 6 |
| SandBox.ViewModelCollection.Missions.MainAgentDetection | 6 |
| TaleWorlds.ActivitySystem | 6 |
| TaleWorlds.CampaignSystem.Settlements.Buildings | 6 |
| TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance | 6 |
| TaleWorlds.Diamond.ClientApplication | 6 |
| TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers | 6 |
| TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon | 6 |
| (global) | 5 |
| SandBox.BoardGames.Tiles | 5 |
| SandBox.Objects.AnimationPoints | 5 |
| SandBox.Objects.AreaMarkers | 5 |
| StoryMode.Missions | 5 |
| StoryMode.StoryModePhases | 5 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Conversation | 5 |
| TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement | 5 |
| TaleWorlds.Localization.TextProcessor | 5 |
| TaleWorlds.MountAndBlade.MissionRepresentatives | 5 |
| TaleWorlds.MountAndBlade.Network.Messages | 5 |
| SandBox.GauntletUI.Tutorial | 4 |
| SandBox.Missions.MissionLogics.Arena | 4 |
| SandBox.Missions.MissionLogics.Towns | 4 |
| SandBox.Tournaments.AgentControllers | 4 |
| SandBox.View.Conversation | 4 |
| SandBox.ViewModelCollection.Map.Cheat | 4 |
| SandBox.ViewModelCollection.Missions | 4 |
| StoryMode.Quests.PlayerClanQuests | 4 |
| TaleWorlds.AchievementSystem | 4 |
| TaleWorlds.CampaignSystem.Incidents | 4 |
| TaleWorlds.CampaignSystem.Map.DistanceCache | 4 |
| TaleWorlds.CampaignSystem.Naval | 4 |
| TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper.PerkSelection | 4 |
| TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu | 4 |
| TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Events | 4 |
| TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment | 4 |
| TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions | 4 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp | 4 |
| TaleWorlds.GauntletUI.GamepadNavigation | 4 |
| TaleWorlds.Library.NewsManager | 4 |
| TaleWorlds.MountAndBlade.MissionSpawnHandlers | 4 |
| TaleWorlds.MountAndBlade.Missions | 4 |
| TaleWorlds.MountAndBlade.Options | 4 |
| TaleWorlds.MountAndBlade.Options.ManagedOptions | 4 |
| TaleWorlds.MountAndBlade.Source.Missions.Handlers | 4 |
| SandBox.AI | 3 |
| SandBox.GauntletUI.Encyclopedia | 3 |
| SandBox.Issues.IssueQuestTasks | 3 |
| SandBox.Missions.MissionEvents | 3 |
| SandBox.Objects.Cinematics | 3 |
| SandBox.View.CharacterCreation | 3 |
| SandBox.View.Map.Navigation | 3 |
| SandBox.View.Missions.NameMarkers | 3 |
| SandBox.View.Missions.SandBox | 3 |
| SandBox.View.Missions.Tournaments | 3 |
| SandBox.ViewModelCollection.BoardGame | 3 |
| SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout | 3 |
| SandBox.ViewModelCollection.Tutorial | 3 |
| StoryMode.Quests.SecondPhase.ConspiracyQuests | 3 |
| StoryMode.Quests.ThirdPhase | 3 |
| StoryMode.View.Missions | 3 |
| TaleWorlds.CampaignSystem.AgentOrigins | 3 |
| TaleWorlds.CampaignSystem.Settlements.Workshops | 3 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Barter | 3 |
| TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection | 3 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup | 3 |
| TaleWorlds.Core.ViewModelCollection.BannerEditor | 3 |
| TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip | 3 |
| TaleWorlds.Engine.InputSystem | 3 |
| TaleWorlds.GauntletUI.ExtraWidgets.Graph | 3 |
| TaleWorlds.GauntletUI.TooltipExtensions | 3 |
| TaleWorlds.Library.EventSystem | 3 |
| TaleWorlds.Library.Graph | 3 |
| TaleWorlds.MountAndBlade.Missions.Objectives | 3 |
| TaleWorlds.MountAndBlade.Network | 3 |
| TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic | 3 |
| TaleWorlds.MountAndBlade.View.MissionViews.Order | 3 |
| TaleWorlds.MountAndBlade.View.MissionViews.Sound | 3 |
| SandBox.BoardGames.MissionLogics | 2 |
| SandBox.BoardGames.Objects | 2 |
| SandBox.Conversation.MissionLogics | 2 |
| SandBox.GauntletUI.BannerEditor | 2 |
| SandBox.Tournaments | 2 |
| SandBox.View.Missions.Sound.Components | 2 |
| SandBox.ViewModelCollection.Map | 2 |
| SandBox.ViewModelCollection.Map.Incidents | 2 |
| StoryMode.Extensions | 2 |
| StoryMode.Quests.QuestTasks | 2 |
| StoryMode.StoryModeObjects | 2 |
| StoryMode.View | 2 |
| StoryMode.ViewModelCollection.Missions | 2 |
| Storymode.Missions | 2 |
| TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers | 2 |
| TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Supporters | 2 |
| TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Policies | 2 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup | 2 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Map.Tracker | 2 |
| TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement | 2 |
| TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order | 2 |
| TaleWorlds.Core.ViewModelCollection.Selector | 2 |
| TaleWorlds.Core.ViewModelCollection.Tutorial | 2 |
| TaleWorlds.Diamond.Socket | 2 |
| TaleWorlds.GauntletUI.GauntletInput | 2 |
| TaleWorlds.LinQuick | 2 |
| TaleWorlds.MountAndBlade.DividableTasks | 2 |
| TaleWorlds.MountAndBlade.GameKeyCategory | 2 |
| TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator | 2 |
| TaleWorlds.MountAndBlade.GauntletUI.SceneNotification | 2 |
| TaleWorlds.MountAndBlade.GauntletUI.Widgets | 2 |
| TaleWorlds.MountAndBlade.Missions.Handlers | 2 |
| TaleWorlds.MountAndBlade.Missions.MissionLogics | 2 |
| TaleWorlds.MountAndBlade.Missions.Multiplayer | 2 |
| TaleWorlds.MountAndBlade.Source.Objects | 2 |
| TaleWorlds.MountAndBlade.Source.Objects.Siege | 2 |
| TaleWorlds.MountAndBlade.View.CustomBattle | 2 |
| TaleWorlds.MountAndBlade.View.SceneNotification | 2 |
| TaleWorlds.MountAndBlade.View.Screens.Scripts | 2 |
| TaleWorlds.MountAndBlade.View.VisualOrders.OrderSets | 2 |
| MBHelpers | 1 |
| SandBox.Conversation | 1 |
| SandBox.Source.Missions.AgentBehaviors | 1 |
| SandBox.View.Overlay | 1 |
| SandBox.ViewModelCollection.Input | 1 |
| SandBox.ViewModelCollection.Nameplate.NameplateNotifications | 1 |
| Sandobx.GauntletUI.Missions | 1 |
| StoryMode.GauntletUI | 1 |
| StoryMode.GauntletUI.Missions | 1 |
| StoryMode.View.MarkerProviders | 1 |
| StoryMode.View.Permissions | 1 |
| StoryMode.ViewModelCollection.Map | 1 |
| TaleWorlds.CampaignSystem.CraftingSystem | 1 |
| TaleWorlds.CampaignSystem.Handlers | 1 |
| TaleWorlds.CampaignSystem.TroopSuppliers | 1 |
| TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation.OptionsStage | 1 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Input | 1 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Map | 1 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapConversation | 1 |
| TaleWorlds.CampaignSystem.ViewModelCollection.Map.Parley | 1 |
| TaleWorlds.Core.SaveCompability | 1 |
| TaleWorlds.Engine.Screens | 1 |
| TaleWorlds.Library.Information | 1 |
| TaleWorlds.MountAndBlade.AI | 1 |
| TaleWorlds.MountAndBlade.AI.AgentComponents | 1 |
| TaleWorlds.MountAndBlade.Missions.Hints | 1 |
| TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions | 1 |
| TaleWorlds.MountAndBlade.View.VisualOrders | 1 |
| TaleWorlds.MountAndBlade.View.VisualOrders.Orders | 1 |
| TaleWorlds.MountAndBlade.View.VisualOrders.Orders.ToggleOrders | 1 |
| TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.FormOrders | 1 |
| TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.ToggleOrders | 1 |

## 两来源不一致

不一致总数：**5076** = classes.json 有但来源 A 没有（3 条，全列于下）+ 来源 A 有但 classes.json 没有（5073 条，仅报数量——classes.json 只有 25 条样本，不逐条列出）。

### classes.json 有但来源 A 没有（3 条）

| namespace | name | classes.json 中的 file |
|---|---|---|
| TaleWorlds.SaveSystem | SaveManager | ./TaleWorlds.SaveSystem/SaveManager.cs |
| TaleWorlds.SaveSystem | AutoGeneratedSaveManager | ./TaleWorlds.SaveSystem/AutoGeneratedSaveManager.cs |
| TaleWorlds.ObjectSystem | MBObjectManager | ./TaleWorlds.ObjectSystem/MBObjectManager.cs |

### 来源 A 有但 classes.json 没有

数量：**5073** 条（仅报数量，不报全列）。

## 复现命令

```bash
node tools/coverage-census.mjs 1.3.0
find "C:\WorkSpace\Bannerlord\bannerlord-1.3.0" -name "*.cs" -type f | wc -l
node -e "console.log(require('C:\WorkSpace\Bannerlord\classes.json').length)"
node -e "console.log(require('./tools/_verify/types-1.3.0.json').sourceACount)"
node -e "console.log(require('./tools/_verify/types-1.3.0.json').disagreementCount)"
```
