# 覆盖率普查报告（20261007）

- 生成脚本：`tools/_verify/make-coverage-census.mjs`（跑一次即出本报告）
- 生成时间：2026-10-07T05:57:06.660Z
- 输入（**只读 JSON，未读任何 content/ 页面正文**）：
  - `tools/_verify/types-<ver>.json` × 6（ver ∈ 1.3.0, 1.3.15, 1.4.5, 1.4.6, 1.4.7, 1.5.3）
  - `tools/_verify/tiers-v<ver>-<lang>.json` × 10（1.3.15 / 1.4.5 为扁平对象；1.4.6 / 1.4.7 / 1.5.3 为 `{pageCount, pages[]}` 汇总对象）
  - v1.3.0 无 tiers 文件（分类未做）

## 分母定义

- **类型分母**：`types-<ver>.json` 的 `uniqueTypeCount`。脚本内对 `types` 数组按 `Namespace.Name` 去重，去重后数量与该字段一致（已逐树验证）。
- **页面分母**：`tiers-v<ver>-<lang>.json` 的页面条数（扁平对象取 key 数；汇总对象取 `pages.length`，与 `pageCount` 一致）。
- **匹配规则（归一化，类型名与页面 basename 同规则）**：① 小写；② 去 `I` 前缀（仅当长度>1 且第二个字母大写）；③ 去 `__TaleWorlds_...` 后缀；④ 去泛型 `<...>`；⑤ 嵌套类取最后一个 `.` 之后；页面侧另取 basename 去 `.md`。
- **歧义桶**：一个归一化名同时对应多个不同类型 ⇒ 既不计「有页面」也不计「缺页」，单独列出。
- **缺页** = 类型集合 − 有页面 − 歧义桶。

## 表1 类型普查

| 树 | fileCount | sourceACount | uniqueTypeCount | disagreementCount |
|---|---:|---:|---:|---:|
| v1.3.0 | 4596 | 5254 | 5095 | 5076 |
| v1.3.15 | 5208 | 7853 | 5444 | 5421 |
| v1.4.5 | 8583 | 11499 | 8779 | 8756 |
| v1.4.6 | 11385 | 13164 | 10356 | 10333 |
| v1.4.7 | 11387 | 13166 | 10358 | 10335 |
| v1.5.3 | 11487 | 13294 | 10480 | 10457 |

量法：`jq '{fileCount,sourceACount,uniqueTypeCount,disagreementCount}' tools/_verify/types-<ver>.json`

## 表2 四档分类（从 tiers 读）

| 树 | 语言 | total | handwritten_deep | generated | shell | other |
|---|---|---:|---:|---:|---:|---:|
| v1.3.0 | zh / en | 待补（分类 worker 未交付） | — | — | — | — |
| v1.3.15 | zh | 5684 | 458 | 1226 | 4000 | 0 |
| v1.3.15 | en | 5677 | 284 | 1278 | 4115 | 0 |
| v1.4.5 | zh | 9477 | 916 | 1975 | 6586 | 0 |
| v1.4.5 | en | 7193 | 464 | 1704 | 5025 | 0 |
| v1.4.6 | zh | 105 | 104 | 0 | 0 | 1 |
| v1.4.6 | en | 6 | 6 | 0 | 0 | 0 |
| v1.4.7 | zh | 48 | 41 | 0 | 0 | 7 |
| v1.4.7 | en | 47 | 38 | 0 | 0 | 9 |
| v1.5.3 | zh | 146 | 144 | 0 | 0 | 2 |
| v1.5.3 | en | 6 | 5 | 0 | 0 | 1 |

量法（扁平对象，1.3.15 / 1.4.5）：`jq 'to_entries|group_by(.value)|map({key:.[0].value,n:length})|from_entries' tools/_verify/tiers-v<ver>-<lang>.json`
量法（汇总对象，1.4.6 / 1.4.7 / 1.5.3）：`jq '.pages|group_by(.tier)|map({key:.[0].tier,n:length})|from_entries' tools/_verify/tiers-v<ver>-<lang>.json`

> 注：v1.4.6 / v1.4.7 / v1.5.3 的 tiers 文件仅含重分类 worker 交付的子集（pageCount 远小于全树页面数），total 不代表全树页面总量。

## 表3 无页面缺口

| 树 | 语言 | 类型数 | 有页面 | 缺页 | 歧义桶 | confidence |
|---|---|---:|---:|---:|---:|---|
| v1.3.0 | zh | 5095 | 0 | 4940 | 155 | low（该树缺 TaleWorlds.ObjectSystem/MBObjectManager，源码不完整） |
| v1.3.0 | en | 5095 | 0 | 4940 | 155 | low（该树缺 TaleWorlds.ObjectSystem/MBObjectManager，源码不完整） |
| v1.3.15 | zh | 5444 | 4883 | 291 | 270 | high |
| v1.3.15 | en | 5444 | 4883 | 291 | 270 | high |
| v1.4.5 | zh | 8779 | 6310 | 1349 | 1120 | high |
| v1.4.5 | en | 8779 | 6311 | 1348 | 1120 | high |
| v1.4.6 | zh | 10356 | 67 | 9025 | 1264 | medium（tiers 文件仅含重分类 worker 交付的子集，非全树页面） |
| v1.4.6 | en | 10356 | 0 | 9092 | 1264 | medium（tiers 文件仅含重分类 worker 交付的子集，非全树页面） |
| v1.4.7 | zh | 10358 | 17 | 9077 | 1264 | medium（tiers 文件仅含重分类 worker 交付的子集，非全树页面） |
| v1.4.7 | en | 10358 | 17 | 9077 | 1264 | medium（tiers 文件仅含重分类 worker 交付的子集，非全树页面） |
| v1.5.3 | zh | 10480 | 129 | 9093 | 1258 | medium（tiers 文件仅含重分类 worker 交付的子集，非全树页面） |
| v1.5.3 | en | 10480 | 0 | 9222 | 1258 | medium（tiers 文件仅含重分类 worker 交付的子集，非全树页面） |

- 歧义桶按树计（与语言无关，同树两行数值相同）；缺页明细见 `tools/_verify/queue-missing-<ver>-<lang>.pages.txt`。
- 量法：`tail -n +2 tools/_verify/queue-missing-<ver>-<lang>.pages.txt | wc -l`（v1.3.0 队列为 2 行头，用 `tail -n +3`）。

## 歧义桶明细（同名不同类型，上限 50 条/树）

### v1.3.0：42 个归一化名 / 155 个类型

- `Helpers.BannerHelper`
- `Helpers.void`
- `MBHelpers.BannerHelper`
- `NetworkMessages.FromClient.ChangeGamePoll`
- `NetworkMessages.FromClient.CreateBanner`
- `NetworkMessages.FromClient.DuelRequest`
- `NetworkMessages.FromClient.PlayerMessageAll`
- `NetworkMessages.FromClient.PlayerMessageTeam`
- `NetworkMessages.FromServer.BotData`
- `NetworkMessages.FromServer.ChangeGamePoll`
- `NetworkMessages.FromServer.CreateBanner`
- `NetworkMessages.FromServer.DuelRequest`
- `NetworkMessages.FromServer.PlayerMessageAll`
- `NetworkMessages.FromServer.PlayerMessageTeam`
- `SandBox.BoardGames.State`
- `SandBox.Campaign`
- `SandBox.Missions.AgentBehaviors.bool`
- `SandBox.Missions.AgentBehaviors.void`
- `SandBox.Missions.MissionLogics.Hideout.void`
- `SandBox.Missions.MissionLogics.List`
- `SandBox.Missions.MissionLogics.void`
- `SandBox.Objects.void`
- `SandBox.Tournaments.MissionLogics.void`
- `SandBox.View.Conversation.EventType`
- `SandBox.View.Conversation.void`
- `SandBox.View.Map.CameraFadeState`
- `SandBox.ViewModelCollection.Input.InputKeyItemVM`
- `SandBox.ViewModelCollection.Map.Tracker.void`
- `SandBox.ViewModelCollection.Nameplate.Type`
- `SandBox.ViewModelCollection.SortState`
- `StoryMode.Extensions.Extensions`
- `StoryMode.Extensions.MetaDataExtensions`
- `StoryMode.Quests.FirstPhase.HideoutBattleEndState`
- `StoryMode.Quests.TutorialPhase.HideoutBattleEndState`
- `Storymode.Missions.MissionState`
- `TaleWorlds.CampaignSystem.BarterSystem.bool`
- `TaleWorlds.CampaignSystem.BarterSystem.void`
- `TaleWorlds.CampaignSystem.Campaign`
- `TaleWorlds.CampaignSystem.CampaignBehaviors.bool`
- `TaleWorlds.CampaignSystem.CharacterCreationContent.List`
- `TaleWorlds.CampaignSystem.CharacterCreationContent.bool`
- `TaleWorlds.CampaignSystem.CharacterCreationContent.void`
- `TaleWorlds.CampaignSystem.CharacterDevelopment.Crafting`
- `TaleWorlds.CampaignSystem.Conversation.Persuasion.PersuasionOptionArgs`
- `TaleWorlds.CampaignSystem.Conversation.PersuasionOptionArgs`
- `TaleWorlds.CampaignSystem.Conversation.bool`
- `TaleWorlds.CampaignSystem.Conversation.void`
- `TaleWorlds.CampaignSystem.Extensions.MetaDataExtensions`
- `TaleWorlds.CampaignSystem.GameMenus.EventType`
- `TaleWorlds.CampaignSystem.GameMenus.IssueQuestFlags`
- …（共 155 条，仅列前 50）

### v1.3.15：92 个归一化名 / 270 个类型

- `Helpers.BannerHelper`
- `Helpers.void`
- `MBHelpers.BannerHelper`
- `ManagedCallbacks.Agent`
- `ManagedCallbacks.AgentMovementLockedState`
- `ManagedCallbacks.AgentProximityMap`
- `ManagedCallbacks.AgentState`
- `ManagedCallbacks.AnimFlags`
- `ManagedCallbacks.BillboardType`
- `ManagedCallbacks.BodyFlags`
- `ManagedCallbacks.BoundingBox`
- `ManagedCallbacks.EntityFlags`
- `ManagedCallbacks.EntityVisibilityFlags`
- `ManagedCallbacks.GameEntity`
- `ManagedCallbacks.IntPtr`
- `ManagedCallbacks.MaterialFlags`
- `ManagedCallbacks.MatrixFrame`
- `ManagedCallbacks.Mission`
- `ManagedCallbacks.PathFaceRecord`
- `ManagedCallbacks.PhysicsMaterial`
- `ManagedCallbacks.PhysicsMaterialFlags`
- `ManagedCallbacks.RagdollState`
- `ManagedCallbacks.TelemetryLevelMask`
- `ManagedCallbacks.Transformation`
- `ManagedCallbacks.Vec2`
- `ManagedCallbacks.Vec3`
- `ManagedCallbacks.VisibilityMaskFlags`
- `ManagedCallbacks.WorldPosition`
- `ManagedCallbacks.bool`
- `ManagedCallbacks.float`
- `ManagedCallbacks.int`
- `ManagedCallbacks.void`
- `Messages.FromBattleServer.ToBattleServerManager.PlayerDisconnectedMessage`
- `Messages.FromBattleServerManager.ToBattleServer.PlayerDisconnectedFromLobbyMessage`
- `Messages.FromClient.ToLobbyServer.RegisterCustomGameMessage`
- `Messages.FromClient.ToLobbyServer.ResponseCustomGameClientConnectionMessage`
- `Messages.FromClient.ToLobbyServer.UpdateCustomGameData`
- `Messages.FromCustomBattleServer.ToCustomBattleServerManager.PlayerDisconnectedMessage`
- `Messages.FromCustomBattleServer.ToCustomBattleServerManager.RegisterCustomGameMessage`
- `Messages.FromCustomBattleServer.ToCustomBattleServerManager.ResponseCustomGameClientConnectionMessage`
- `Messages.FromCustomBattleServer.ToCustomBattleServerManager.UpdateCustomGameData`
- `Messages.FromCustomBattleServerManager.ToCustomBattleServer.ClientQuitFromCustomGameMessage`
- `Messages.FromCustomBattleServerManager.ToCustomBattleServer.ClientWantsToConnectCustomGameMessage`
- `Messages.FromCustomBattleServerManager.ToCustomBattleServer.PlayerDisconnectedFromLobbyMessage`
- `Messages.FromLobbyServer.ToClient.ClientQuitFromCustomGameMessage`
- `Messages.FromLobbyServer.ToClient.ClientWantsToConnectCustomGameMessage`
- `NetworkMessages.FromClient.ChangeGamePoll`
- `NetworkMessages.FromClient.CreateBanner`
- `NetworkMessages.FromClient.DuelRequest`
- `NetworkMessages.FromClient.PlayerMessageAll`
- …（共 270 条，仅列前 50）

### v1.4.5：177 个归一化名 / 1120 个类型

- `Galaxy.Api.Type`
- `Galaxy.Api.string`
- `Galaxy.Api.void`
- `Helpers.BannerHelper`
- `Helpers.void`
- `MBHelpers.BannerHelper`
- `ManagedCallbacks.Agent`
- `ManagedCallbacks.AgentMovementLockedState`
- `ManagedCallbacks.AgentProximityMap`
- `ManagedCallbacks.AgentState`
- `ManagedCallbacks.AnimFlags`
- `ManagedCallbacks.BillboardType`
- `ManagedCallbacks.BodyFlags`
- `ManagedCallbacks.BoundingBox`
- `ManagedCallbacks.EntityFlags`
- `ManagedCallbacks.EntityVisibilityFlags`
- `ManagedCallbacks.GameEntity`
- `ManagedCallbacks.IntPtr`
- `ManagedCallbacks.MaterialFlags`
- `ManagedCallbacks.MatrixFrame`
- `ManagedCallbacks.Mission`
- `ManagedCallbacks.PathFaceRecord`
- `ManagedCallbacks.PhysicsMaterial`
- `ManagedCallbacks.PhysicsMaterialFlags`
- `ManagedCallbacks.RagdollState`
- `ManagedCallbacks.TelemetryLevelMask`
- `ManagedCallbacks.Transformation`
- `ManagedCallbacks.Vec2`
- `ManagedCallbacks.Vec3`
- `ManagedCallbacks.VisibilityMaskFlags`
- `ManagedCallbacks.WorldPosition`
- `ManagedCallbacks.bool`
- `ManagedCallbacks.float`
- `ManagedCallbacks.int`
- `ManagedCallbacks.void`
- `Messages.FromBattleServer.ToBattleServerManager.PlayerDisconnectedMessage`
- `Messages.FromBattleServerManager.ToBattleServer.PlayerDisconnectedFromLobbyMessage`
- `Messages.FromClient.ToLobbyServer.RegisterCustomGameMessage`
- `Messages.FromClient.ToLobbyServer.ResponseCustomGameClientConnectionMessage`
- `Messages.FromClient.ToLobbyServer.UpdateCustomGameData`
- `Messages.FromCustomBattleServer.ToCustomBattleServerManager.PlayerDisconnectedMessage`
- `Messages.FromCustomBattleServer.ToCustomBattleServerManager.RegisterCustomGameMessage`
- `Messages.FromCustomBattleServer.ToCustomBattleServerManager.ResponseCustomGameClientConnectionMessage`
- `Messages.FromCustomBattleServer.ToCustomBattleServerManager.UpdateCustomGameData`
- `Messages.FromCustomBattleServerManager.ToCustomBattleServer.ClientQuitFromCustomGameMessage`
- `Messages.FromCustomBattleServerManager.ToCustomBattleServer.ClientWantsToConnectCustomGameMessage`
- `Messages.FromCustomBattleServerManager.ToCustomBattleServer.PlayerDisconnectedFromLobbyMessage`
- `Messages.FromLobbyServer.ToClient.ClientQuitFromCustomGameMessage`
- `Messages.FromLobbyServer.ToClient.ClientWantsToConnectCustomGameMessage`
- `NetworkMessages.FromClient.ChangeGamePoll`
- …（共 1120 条，仅列前 50）

### v1.4.6：237 个归一化名 / 1264 个类型

- `Galaxy.Api.Type`
- `Galaxy.Api.string`
- `Galaxy.Api.void`
- `Helpers.BannerHelper`
- `Helpers.void`
- `JetBrains.Annotations.PureAttribute`
- `MBHelpers.BannerHelper`
- `ManagedCallbacks.Agent`
- `ManagedCallbacks.AgentMovementLockedState`
- `ManagedCallbacks.AgentProximityMap`
- `ManagedCallbacks.AgentState`
- `ManagedCallbacks.AnimFlags`
- `ManagedCallbacks.BillboardType`
- `ManagedCallbacks.BodyFlags`
- `ManagedCallbacks.BoundingBox`
- `ManagedCallbacks.EntityFlags`
- `ManagedCallbacks.EntityVisibilityFlags`
- `ManagedCallbacks.GameEntity`
- `ManagedCallbacks.IntPtr`
- `ManagedCallbacks.MaterialFlags`
- `ManagedCallbacks.MatrixFrame`
- `ManagedCallbacks.Mission`
- `ManagedCallbacks.PathFaceRecord`
- `ManagedCallbacks.PhysicsMaterial`
- `ManagedCallbacks.PhysicsMaterialFlags`
- `ManagedCallbacks.RagdollState`
- `ManagedCallbacks.TelemetryLevelMask`
- `ManagedCallbacks.Transformation`
- `ManagedCallbacks.UIntPtr`
- `ManagedCallbacks.Vec2`
- `ManagedCallbacks.Vec3`
- `ManagedCallbacks.VisibilityMaskFlags`
- `ManagedCallbacks.WorldPosition`
- `ManagedCallbacks.bool`
- `ManagedCallbacks.double`
- `ManagedCallbacks.float`
- `ManagedCallbacks.int`
- `ManagedCallbacks.sbyte`
- `ManagedCallbacks.void`
- `ManagedStarter.Program`
- `Messages.FromBattleServer.ToBattleServerManager.PlayerDisconnectedMessage`
- `Messages.FromBattleServerManager.ToBattleServer.PlayerDisconnectedFromLobbyMessage`
- `Messages.FromClient.ToLobbyServer.RegisterCustomGameMessage`
- `Messages.FromClient.ToLobbyServer.ResponseCustomGameClientConnectionMessage`
- `Messages.FromClient.ToLobbyServer.UpdateCustomGameData`
- `Messages.FromCustomBattleServer.ToCustomBattleServerManager.PlayerDisconnectedMessage`
- `Messages.FromCustomBattleServer.ToCustomBattleServerManager.RegisterCustomGameMessage`
- `Messages.FromCustomBattleServer.ToCustomBattleServerManager.ResponseCustomGameClientConnectionMessage`
- `Messages.FromCustomBattleServer.ToCustomBattleServerManager.UpdateCustomGameData`
- `Messages.FromCustomBattleServerManager.ToCustomBattleServer.ClientQuitFromCustomGameMessage`
- …（共 1264 条，仅列前 50）

### v1.4.7：237 个归一化名 / 1264 个类型

- `Galaxy.Api.Type`
- `Galaxy.Api.string`
- `Galaxy.Api.void`
- `Helpers.BannerHelper`
- `Helpers.void`
- `JetBrains.Annotations.PureAttribute`
- `MBHelpers.BannerHelper`
- `ManagedCallbacks.Agent`
- `ManagedCallbacks.AgentMovementLockedState`
- `ManagedCallbacks.AgentProximityMap`
- `ManagedCallbacks.AgentState`
- `ManagedCallbacks.AnimFlags`
- `ManagedCallbacks.BillboardType`
- `ManagedCallbacks.BodyFlags`
- `ManagedCallbacks.BoundingBox`
- `ManagedCallbacks.EntityFlags`
- `ManagedCallbacks.EntityVisibilityFlags`
- `ManagedCallbacks.GameEntity`
- `ManagedCallbacks.IntPtr`
- `ManagedCallbacks.MaterialFlags`
- `ManagedCallbacks.MatrixFrame`
- `ManagedCallbacks.Mission`
- `ManagedCallbacks.PathFaceRecord`
- `ManagedCallbacks.PhysicsMaterial`
- `ManagedCallbacks.PhysicsMaterialFlags`
- `ManagedCallbacks.RagdollState`
- `ManagedCallbacks.TelemetryLevelMask`
- `ManagedCallbacks.Transformation`
- `ManagedCallbacks.UIntPtr`
- `ManagedCallbacks.Vec2`
- `ManagedCallbacks.Vec3`
- `ManagedCallbacks.VisibilityMaskFlags`
- `ManagedCallbacks.WorldPosition`
- `ManagedCallbacks.bool`
- `ManagedCallbacks.double`
- `ManagedCallbacks.float`
- `ManagedCallbacks.int`
- `ManagedCallbacks.sbyte`
- `ManagedCallbacks.void`
- `ManagedStarter.Program`
- `Messages.FromBattleServer.ToBattleServerManager.PlayerDisconnectedMessage`
- `Messages.FromBattleServerManager.ToBattleServer.PlayerDisconnectedFromLobbyMessage`
- `Messages.FromClient.ToLobbyServer.RegisterCustomGameMessage`
- `Messages.FromClient.ToLobbyServer.ResponseCustomGameClientConnectionMessage`
- `Messages.FromClient.ToLobbyServer.UpdateCustomGameData`
- `Messages.FromCustomBattleServer.ToCustomBattleServerManager.PlayerDisconnectedMessage`
- `Messages.FromCustomBattleServer.ToCustomBattleServerManager.RegisterCustomGameMessage`
- `Messages.FromCustomBattleServer.ToCustomBattleServerManager.ResponseCustomGameClientConnectionMessage`
- `Messages.FromCustomBattleServer.ToCustomBattleServerManager.UpdateCustomGameData`
- `Messages.FromCustomBattleServerManager.ToCustomBattleServer.ClientQuitFromCustomGameMessage`
- …（共 1264 条，仅列前 50）

### v1.5.3：238 个归一化名 / 1258 个类型

- `Galaxy.Api.Type`
- `Galaxy.Api.string`
- `Galaxy.Api.void`
- `Helpers.BannerHelper`
- `Helpers.void`
- `JetBrains.Annotations.PureAttribute`
- `MBHelpers.BannerHelper`
- `ManagedCallbacks.Agent`
- `ManagedCallbacks.AgentMovementLockedState`
- `ManagedCallbacks.AgentProximityMap`
- `ManagedCallbacks.AgentState`
- `ManagedCallbacks.AnimFlags`
- `ManagedCallbacks.BillboardType`
- `ManagedCallbacks.BodyFlags`
- `ManagedCallbacks.BoundingBox`
- `ManagedCallbacks.EntityFlags`
- `ManagedCallbacks.EntityVisibilityFlags`
- `ManagedCallbacks.GameEntity`
- `ManagedCallbacks.IntPtr`
- `ManagedCallbacks.MaterialFlags`
- `ManagedCallbacks.MatrixFrame`
- `ManagedCallbacks.Mission`
- `ManagedCallbacks.PathFaceRecord`
- `ManagedCallbacks.PhysicsMaterial`
- `ManagedCallbacks.PhysicsMaterialFlags`
- `ManagedCallbacks.RagdollState`
- `ManagedCallbacks.TelemetryLevelMask`
- `ManagedCallbacks.Transformation`
- `ManagedCallbacks.UIntPtr`
- `ManagedCallbacks.Vec2`
- `ManagedCallbacks.Vec3`
- `ManagedCallbacks.VisibilityMaskFlags`
- `ManagedCallbacks.WorldPosition`
- `ManagedCallbacks.bool`
- `ManagedCallbacks.double`
- `ManagedCallbacks.float`
- `ManagedCallbacks.int`
- `ManagedCallbacks.sbyte`
- `ManagedCallbacks.void`
- `ManagedStarter.Program`
- `Messages.FromBattleServer.ToBattleServerManager.PlayerDisconnectedMessage`
- `Messages.FromBattleServerManager.ToBattleServer.PlayerDisconnectedFromLobbyMessage`
- `Messages.FromClient.ToLobbyServer.RegisterCustomGameMessage`
- `Messages.FromClient.ToLobbyServer.ResponseCustomGameClientConnectionMessage`
- `Messages.FromClient.ToLobbyServer.UpdateCustomGameData`
- `Messages.FromCustomBattleServer.ToCustomBattleServerManager.PlayerDisconnectedMessage`
- `Messages.FromCustomBattleServer.ToCustomBattleServerManager.RegisterCustomGameMessage`
- `Messages.FromCustomBattleServer.ToCustomBattleServerManager.ResponseCustomGameClientConnectionMessage`
- `Messages.FromCustomBattleServer.ToCustomBattleServerManager.UpdateCustomGameData`
- `Messages.FromCustomBattleServerManager.ToCustomBattleServer.ClientQuitFromCustomGameMessage`
- …（共 1258 条，仅列前 50）

## 两来源不一致（sourceA vs sourceB）

### v1.3.0：disagreementCount=5076，sourceAOnlyCount=5073，disagreements 明细数组长度=3

- `TaleWorlds.SaveSystem.SaveManager` — `./TaleWorlds.SaveSystem/SaveManager.cs`
- `TaleWorlds.SaveSystem.AutoGeneratedSaveManager` — `./TaleWorlds.SaveSystem/AutoGeneratedSaveManager.cs`
- `TaleWorlds.ObjectSystem.MBObjectManager` — `./TaleWorlds.ObjectSystem/MBObjectManager.cs`

### v1.3.15：disagreementCount=5421，sourceAOnlyCount=5420，disagreements 明细数组长度=1

- `TaleWorlds.SaveSystem.AutoGeneratedSaveManager` — `./TaleWorlds.SaveSystem/AutoGeneratedSaveManager.cs`

### v1.4.5：disagreementCount=8756，sourceAOnlyCount=8755，disagreements 明细数组长度=1

- `TaleWorlds.SaveSystem.AutoGeneratedSaveManager` — `./TaleWorlds.SaveSystem/AutoGeneratedSaveManager.cs`

### v1.4.6：disagreementCount=10333，sourceAOnlyCount=10332，disagreements 明细数组长度=1

- `TaleWorlds.SaveSystem.AutoGeneratedSaveManager` — `./TaleWorlds.SaveSystem/AutoGeneratedSaveManager.cs`

### v1.4.7：disagreementCount=10335，sourceAOnlyCount=10334，disagreements 明细数组长度=1

- `TaleWorlds.SaveSystem.AutoGeneratedSaveManager` — `./TaleWorlds.SaveSystem/AutoGeneratedSaveManager.cs`

### v1.5.3：disagreementCount=10457，sourceAOnlyCount=10456，disagreements 明细数组长度=1

- `TaleWorlds.SaveSystem.AutoGeneratedSaveManager` — `./TaleWorlds.SaveSystem/AutoGeneratedSaveManager.cs`

量法：`jq '{disagreementCount,sourceAOnlyCount,disagreements}' tools/_verify/types-<ver>.json`

## 全站合计

- 类型总数（Σ uniqueTypeCount，6 树）：**50512**
- 页面总数（Σ tiers total，10 个 树×语言；v1.3.0 无 tiers 记 0）：**28389**
- 缺页总数（Σ 缺页，10 个 树×语言；v1.3.0 按 confidence=low 计入）：**67745**
- 歧义桶总数（Σ 每树歧义类型数，按树计一次）：**5331**

## 每个数字的量法（复现命令）

- 重跑本报告：`node tools/_verify/make-coverage-census.mjs`
- 表1 任一行：`jq '{fileCount,sourceACount,uniqueTypeCount,disagreementCount}' tools/_verify/types-1.3.0.json`
- 表2 扁平 tiers：`jq 'to_entries|group_by(.value)|map({key:.[0].value,n:length})|from_entries' tools/_verify/tiers-v1.3.15-zh.json`
- 表2 汇总 tiers：`jq '.pages|group_by(.tier)|map({key:.[0].tier,n:length})|from_entries' tools/_verify/tiers-v1.4.6-zh.json`
- 表3 缺页数：`tail -n +2 tools/_verify/queue-missing-1.3.15-zh.pages.txt | wc -l`（v1.3.0 队列 3 行头，用 `tail -n +3`）
- 表3 歧义桶：见上「歧义桶明细」节（脚本按归一化名分组，组内 >1 个类型即入桶）
- 两来源不一致：`jq '{disagreementCount,sourceAOnlyCount,disagreements}' tools/_verify/types-1.3.0.json`
