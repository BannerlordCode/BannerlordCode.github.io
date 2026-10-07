---
title: "TrainingFieldEncounter"
description: "主线练武场的遭遇实现：玩家进入 training_field 地点时接管任务创建，打开一个训练用 mission。"
---
# TrainingFieldEncounter

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public class TrainingFieldEncounter : LocationEncounter`
**Base:** `LocationEncounter`（TaleWorlds.CampaignSystem.Encounters）
**Source:** `bannerlord-1.5.3/StoryMode/TrainingFieldEncounter.cs`

## 概述

`LocationEncounter` 是「玩家站在某个聚落的某个地点时」的遭遇对象——进酒馆拿到 `TavernEncounter`，进村庄拿到 `VillageEncounter`。`TrainingFieldEncounter` 是主线教学那一处：它只覆写一个方法，在玩家走向 `training_field` 地点时把默认的地点 mission 换成专用的训练 mission。

## 心智模型

它的实例挂在 `PlayerEncounter.LocationEncounter` 这个静态属性上，由引擎在玩家进入聚落时按类型创建。玩家点了「进入练武」的菜单选项后，`TrainingFieldCampaignBehavior` 调：

```csharp
PlayerEncounter.LocationEncounter.CreateAndOpenMissionController(
    LocationComplex.Current.GetLocationWithId("training_field"), null, null, null);
```

这个虚方法被派发到本类。内部逻辑极其直接：

1. 若目标地点的 `StringId != "training_field"`，**返回 null**——表示「我不处理这个地点」，交回基类语义。
2. 若命中，取城墙等级决定场景编号：城镇按真实 `Town.GetWallLevel()`，其它聚落一律当 1 级。
3. 调 `StoryModeMissions.OpenTrainingFieldMission(scene, location, null, null)` 开 mission。

`OpenTrainingFieldMission` 内部走 `MissionState.OpenNew("TrainingField", ...)`，挂上一串 `MissionBehavior`，其中关键的是 `TrainingFieldMissionController`——教学 objectives 全在里面。

**坑**：

1. **返回 null 而不是 `base.CreateAndOpenMissionController(...)`**：这意味着走进练武场以外的地点（比如练武场的其它 `Location`）时**什么都不会发生**。这是有意的，但也意味着不能靠基类兜底。
2. **`Settlement.CurrentSettlement` 无判空**：场景名那一行直接 `Settlement.CurrentSettlement.IsTown ? ... : 1`。`nextLocation.StringId == "training_field"` 时通常在聚落里，但**代码没保证**——传错地点会 NRE。
3. **`Town.GetWallLevel()` 的取值被当成场景编号**：城墙等级 0–4 直接喂给 `GetSceneName(int)`。练武场在教学里不是城镇，通常走 `1` 这条分支。
4. **构造函数的 `settlement` 参数只交给基类**：基类把它存成 `Settlement { get; }`。本类自己不缓存任何状态。
5. **`IMission` 返回类型**：方法签名返回 `IMission`，而 `OpenTrainingFieldMission` 返回 `Mission`（实现 `IMission`）。调用方若想拿到具体 `Mission` 需要转型。

## 怎么用

### 怎么拿到它

`public class TrainingFieldEncounter : LocationEncounter` 声明在 `bannerlord-1.5.3/StoryMode/TrainingFieldEncounter.cs:13`，全文 44 行。构造函数 `TrainingFieldEncounter(Settlement settlement) : base(settlement)`（`:27`→`:28`）是唯一的创建口，函数体为空——`settlement` 只是转给基类存成 `Settlement { get; }`，本类不缓存任何东西。

**它也是对象系统造的**：走 `LocationEncounter` 的 XML 注册通道，由聚落地点数据反序列化出来。你在代码里拿到的路径是 `PlayerEncounter.LocationEncounter`，而不是自己 new。

真正干活的是唯一的方法 `CreateAndOpenMissionController(Location nextLocation, Location previousLocation = null, CharacterObject talkToChar = null, string playerSpecialSpawnTag = null)`（`:33`）。它先 `IMission mission = null;`（`:35`），只有 `nextLocation.StringId == "training_field"` 时才填（`:36`）：

1. 场景名：`Settlement.CurrentSettlement.IsTown ? Settlement.CurrentSettlement.Town.GetWallLevel() : 1`（`:38`）——注意**墙等级被当成场景编号**直接喂给 `GetSceneName(int)`。
2. 场景名转 Location 场景：`nextLocation.GetSceneName(num)`（`:39`）。
3. 开场景：`StoryModeMissions.OpenTrainingFieldMission(sceneName, nextLocation, null, null)`（`:39`），返回类型 `IMission`。
4. `return mission;`（`:41`）。**不是 `base.CreateAndOpenMissionController(...)`。**

触发方是 [TrainingFieldCampaignBehavior](../TrainingFieldCampaignBehavior) 的 `OnCharacterCreationIsOver(int index)`，在 `index == 1` 且 `SkipTutorialMission == false` 时：`PlayerEncounter.LocationEncounter.CreateAndOpenMissionController(LocationComplex.Current.GetLocationWithId("training_field"), null, null, null)`（`TrainingFieldCampaignBehavior.cs:46`）。菜单选项那边在 `OnSessionLaunched` 注册的 `training_field_enter`（`TrainingFieldCampaignBehavior.cs:56`），离开类型是 `GameMenuOption.LeaveType.Mission`。

### 典型用法

```csharp
// 玩家实际路径：菜单选项 -> CreateAndOpenMissionController
// 等价于 TrainingFieldCampaignBehavior.cs:46 那一行
Location trainingLocation = LocationComplex.Current.GetLocationWithId("training_field");
IMission mission = PlayerEncounter.LocationEncounter.CreateAndOpenMissionController(
    trainingLocation, null, null, null);
if (mission != null)
{
    Debug.Print("训练场场景：" + trainingLocation.GetSceneName(1));
}

// 拿到具体 Mission（返回类型是 IMission，要转型才能用 Mission 的成员）
if (mission is Mission trainingMission)
{
    trainingMission.EndMission();     // 原生跳过教学时走的就是 Mission.Current.EndMission()
}

// 聚落侧：Settlement 由基类 LocationEncounter 持有
Settlement host = (PlayerEncounter.LocationEncounter as TrainingFieldEncounter)?.Settlement;
Debug.Print("遭遇所属聚落=" + (host != null ? host.StringId : "null"));
```

### 最容易踩的坑

`nextLocation.StringId != "training_field"` 时它**返回 null，而不是调用基类**（`:35`→`:41`）。所以只要 `Location` id 不是这唯一硬编码的字符串，练武场遭遇类就是个黑洞——不报错、不开场景、什么都不发生。原生代码能跑对，仅仅因为它自己传进去的就是 `LocationComplex.Current.GetLocationWithId("training_field")`（`TrainingFieldCampaignBehavior.cs:46`）。你从别处调这个方法时如果传了别的 `Location`，得到的 `IMission` 是 null，**必须判空再 `EndMission()`**，否则空引用。

## 主要成员

- `public TrainingFieldEncounter(Settlement settlement)`：**唯一构造函数**，内容是 `: base(settlement)`。本类无自有字段。
- `public override IMission CreateAndOpenMissionController(Location nextLocation, Location previousLocation = null, CharacterObject talkToChar = null, string playerSpecialSpawnTag = null)`：核心覆写。四个参数里只有 `nextLocation` 被用；`talkToChar` 和 `playerSpecialSpawnTag` **被原样丢弃**（传 null 给 `OpenTrainingFieldMission` 的第三参，第四参连传都没传）。
- `internal static void AutoGeneratedStaticCollectObjectsTrainingFieldEncounter(object o, List<object> collectedObjects)`：自动生成的存档静态钩子，不要手写调用。
- `protected virtual void AutoGeneratedInstanceCollectObjects(List<object> collectedObjects)`：**方法体是空的**（没有 `base` 调用，也没有加任何对象）。说明本类没有需要进存档的对象引用。

## 使用示例

```csharp
// 1) 打开练武场 mission（TrainingFieldCampaignBehavior 里的真实写法）
EncounterManager.StartSettlementEncounter(MobileParty.MainParty, Settlement.Find("tutorial_training_field"));
PlayerEncounter.LocationEncounter.CreateAndOpenMissionController(
    LocationComplex.Current.GetLocationWithId("training_field"), null, null, null);

// 2) 自己算一遍场景名，看本类内部到底开了哪个 scene
Settlement trainingField = Settlement.Find("tutorial_training_field");
Location loc = LocationComplex.Current.GetLocationWithId("training_field");
int sceneLevel = trainingField.IsTown ? trainingField.Town.GetWallLevel() : 1;
string scene = loc.GetSceneName(sceneLevel);
Debug.Print("训练场景：" + scene);

// 3) 直接开 mission（跳过遭遇派发，效果等价）
Mission mission = StoryModeMissions.OpenTrainingFieldMission(scene, loc, null, null);

// 4) 识别当前是不是在练武场
if (Settlement.CurrentSettlement != null && Settlement.CurrentSettlement.IsTrainingField())
{
    Debug.Print("玩家在练武场");
}
```

## 风险与边界

- **`Settlement.CurrentSettlement` 无判空**：地点 id 判断通过但当前不在聚落时 NRE。手动构造调用要保证上下文完整。
- **不调用基类**：非 `training_field` 地点返回 null 而不是回退。自己派发到别的地点时不会有任何 mission 打开。
- **参数被静默丢弃**：`talkToChar` 和 `playerSpecialSpawnTag` 传了也没用。想跟 NPC 说话得另外走对话流程。
- **`GetWallLevel()` 直接当场景编号**：场景 XML 必须覆盖 0–4 全部等级，缺一个就是加载失败。mod 自建练武场聚落时要注意。
- **`AutoGeneratedInstanceCollectObjects` 是空的**：本类不持有可存档引用。若 mod 给它加字段，必须同步补上这个方法，否则存档丢数据。
- **存档 id 5**：[SaveableStoryModeTypeDefiner](../SaveableStoryModeTypeDefiner) 给它分配了 id，尽管它本身几乎无状态——这是为将来的扩展留的号。

## 依赖关系

- [TrainingField](../TrainingField) — 同一处练武场的 SettlementComponent 侧实现
- [Extensions](../Extensions) — `IsTrainingField()` / `TrainingField()` 扩展方法，判断是否在练武场
- [CampaignStoryMode](../CampaignStoryMode) — 加载时把练武场的地图实体加进 MapScene
- [SaveableStoryModeTypeDefiner](../SaveableStoryModeTypeDefiner) — 给本类型分配存档类型 id 5