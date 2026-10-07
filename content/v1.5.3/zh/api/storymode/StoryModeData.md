---
title: "StoryModeData"
description: "按 StringId 缓存并暴露八个原生王国的静态查询表，以及阴谋部队名单和藏身处计时常量。"
---
# StoryModeData

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public static class StoryModeData`
**Base:** `System.Object`（纯静态类，不可实例化）
**Source:** `bannerlord-1.5.3/StoryMode/StoryModeData.cs`

## 概述

`StoryModeData` 解决一个很具体的问题：主线剧本里到处需要「帝国是哪个王国」「反帝国是哪个王国」，而 `Kingdom` 对象要从 `Kingdom.All` 里按 `StringId` 捞。这个类把 8 个王国的查找、`ImperialCulture` 的推导、阴谋部队的白名单，统一成一组静态属性，并用一个 `OnGameEnd()` 做缓存清理。它**不是配置容器**——唯一的可变静态字段是 `StorylineQuestHideoutHiddenDuration`，而它是 `public` 字段，任何人都能改。

## 心智模型

每次访问 `NorthernEmpireKingdom` 之类的属性，逻辑都一样：先看私有静态字段有没有缓存，没有就遍历 `Kingdom.All` 按 `StringId` 匹配，命中则缓存并返回；**没命中则 `Debug.FailedAssert` 并返回 null**。这个 assert 在 release 构建里被编译掉，于是发布版会安静地返回 null——这是本类最大的隐患。

`ImperialCulture` 不是独立查表，而是转发 `NorthernEmpireKingdom.Culture`。所以一旦北方帝国查不到，`IsKingdomImperial(任何王国)` 的行为会跟着变得不可预测（`kingdomToCheck.Culture == null` 或抛 NRE）。

**生命周期**：`StoryModeManager.Destroy()` 会调 `OnGameEnd()` 把 8 个缓存字段全部置 null。这条链路由 `StoryModeSubModule.OnGameEnd` 触发。**如果你自己没走主线战役（比如在沙盒里），没人会替你清缓存**——换战役后旧 Kingdom 对象可能仍被静态字段持有。

**典型用法**：在 behavior 的 `DailyTick` 或模型方法里判「这个王国算不算帝国侧」，直接 `StoryModeData.IsKingdomImperial(kingdom)`，不要自己写 `kingdom.StringId == "empire"`。

**坑**：

1. `IsConspiracyTroop` 直接 `troop.StringId` 然后查 HashSet。传 null 会 NRE——`troop` 没有判空。
2. `_conspiracyTroops` 里有一个 `conspiracy_commander_antiempire`，但没有 `conspiracy_commander_empire`（帝国方指挥官不在白名单里）。这看起来像原生疏漏，写 mod 时别假设两个指挥官待遇一致。
3. `StorylineQuestHideoutHiddenDuration` 是 **12 小时的 CampaignTime**，改它会影响阴谋任务藏身处地图标记的隐藏时长。

## 怎么用

### 怎么拿到它

`public static class StoryModeData` 声明在 `bannerlord-1.5.3/StoryMode/StoryModeData.cs:9`，全文 265 行。静态类、无实例、无构造函数，**直接用类名访问**。它没有任何注册环节，是全模块最底层的常量与缓存层。

八个王国缓存属性都是同一个模子：先看私有静态字段有没有值，有就直接返回；没有就 `foreach (Kingdom kingdom in Kingdom.All)` 找 `kingdom.StringId` 相等的那一个，缓存起来返回；找不到就 `Debug.FailedAssert(...)` 然后 `return null`。

| 属性 | 找的 `StringId` | 声明行 | 断言行 |
| --- | --- | --- | --- |
| `NorthernEmpireKingdom` | `empire` | `:29` | `:45` |
| `WesternEmpireKingdom` | `empire_w` | `:52` | `:68` |
| `SouthernEmpireKingdom` | `empire_s` | `:75` | `:91` |
| `SturgiaKingdom` | `sturgia` | `:98` | `:114` |
| `AseraiKingdom` | `aserai` | `:121` | `:137` |
| `VlandiaKingdom` | `vlandia` | `:144` | `:160` |
| `BattaniaKingdom` | `battania` | `:167` | `:183` |
| `KhuzaitKingdom` | `khuzait` | `:190` | `:206` |

`IsKingdomImperial(Kingdom kingdomToCheck)`（`:12`）**不缓存**，每次都现算 `kingdomToCheck != null && kingdomToCheck.Culture == ImperialCulture`（`:14`），而 `ImperialCulture`（`:19`）本身又转发 `NorthernEmpireKingdom.Culture`（`:23`）——所以第一次调用会连带触发一次全 `Kingdom.All` 遍历。

唯一的清理钩子是 `public static void OnGameEnd()`（`:218`），把八个缓存字段全部置 null（`:220`–`:227`）。它由 `StoryModeManager.Destroy()`（`StoryModeManager.cs:90`）调用，而 `Destroy` 是 `internal`，触发点是 `StoryModeSubModule.OnGameEnd`（`StoryModeSubModule.cs:40`）。**没有手动清理入口，也不该有。**

### 典型用法

```csharp
// 判定帝国侧：比的是 Culture，不是 StringId
if (StoryModeData.IsKingdomImperial(kingdom))
{
    Debug.Print("帝国侧，文化=" + kingdom.Culture.StringId);
}

// 八个王国缓存：第一次访问遍历全部 Kingdom，之后是 O(1)
Kingdom battania = StoryModeData.BattaniaKingdom;
Debug.Print("巴旦尼亚君主=" + battania.Leader.Name);

// 阴谋士兵判定：读 CharacterObject.StringId，比对 29 个硬编码字面量
if (StoryModeData.IsConspiracyTroop(prisoner.Character))
{
    Debug.Print("阴谋士兵不能被俘获（StoryModeBattleRewardModel:178 依赖这条）");
}

// 可写字段：藏身处战败后的冷却时间，mod 可改
StoryModeData.StorylineQuestHideoutHiddenDuration = CampaignTime.Hours(24f);
Debug.Print("冷却天数=" + StoryModeData.StorylineQuestHideoutHiddenDuration.ToDays);
```

### 最容易踩的坑

`IsKingdomImperial` 比的是 **Culture 对象相等**，不是 `StringId`。源码链是 `kingdomToCheck.Culture == ImperialCulture`（`:14`）→ `NorthernEmpireKingdom.Culture`（`:23`）。所以任何一个 mod 只要把某个王国的 `Culture` 换成帝国文化，它就会被判成帝国侧，进而在 `SecondPhase` 的阵营分支、`StoryModeKingdomDecisionPermissionModel` 的宣战判定里走错边——而这些代码读的是同一个 `IsKingdomImperial`。要按 id 判，请直接写 `kingdom.StringId == "empire"`，别复用这个便捷函数。

## 主要成员

- `static bool IsKingdomImperial(Kingdom kingdomToCheck)`：判帝国侧。内部是 `kingdomToCheck != null && kingdomToCheck.Culture == ImperialCulture`。**注意它比的是 Culture 而不是 StringId**，所以瓦兰迪亚王国的文化若是帝国文化也会算 true。传 null 安全返回 false。
- `static CultureObject ImperialCulture { get; }`：转发 `NorthernEmpireKingdom.Culture`。
- `static Kingdom NorthernEmpireKingdom`（`"empire"`）/ `WesternEmpireKingdom`（`"empire_w"`）/ `SouthernEmpireKingdom`（`"empire_s"`）/ `SturgiaKingdom`（`"sturgia"`）/ `AseraiKingdom`（`"aserai"`）/ `VlandiaKingdom`（`"vlandia"`）/ `BattaniaKingdom`（`"battania"`）/ `KhuzaitKingdom`（`"khuzait"`）：八个带缓存的查找属性。查不到返回 null。
- `static bool IsConspiracyTroop(CharacterObject troop)`：按 `StringId` 判断是否在 30 个阴谋单位名单里。`troop` 为 null 会 NRE。
- `static void OnGameEnd()`：清空 8 个缓存。由 `StoryModeManager.Destroy()` 调，mod 一般不需要手动调。
- `public static CampaignTime StorylineQuestHideoutHiddenDuration`：**可写公有静态字段**，默认 `CampaignTime.Hours(12f)`。想在你的战役里改藏身处隐藏时长就赋值它。
- `private static HashSet<string> _conspiracyTroops`：30 个 `conspiracy_*` 单位的 StringId 集合，只读用途。

## 使用示例

```csharp
// 1) 判阵营：写 mod 判定时优先用它，别硬编码 StringId
//    原生 SecondPhase.CreateConspiracyClan 就是这么遍历的
Clan playerClan = Clan.PlayerClan;
foreach (Kingdom kingdom in Kingdom.All)
{
    if (StoryModeManager.Current.MainStoryLine.IsOnImperialQuestLine == StoryModeData.IsKingdomImperial(kingdom))
    {
        DeclareWarAction.ApplyByQuest(playerClan, kingdom);
    }
}

// 2) 拿具体王国（查不到会 FailedAssert，发布版返回 null）
Kingdom sturgia = StoryModeData.SturgiaKingdom;
if (sturgia != null && sturgia.IsEliminated)
{
    Debug.Print("斯特尔格亚王国已经灭亡");
}

// 3) 判是不是阴谋部队（troop 不能为 null）
bool isConspiracy = StoryModeData.IsConspiracyTroop(characterObject);

// 4) 调整藏身处隐藏时长（在自己的 submodule 里做一次即可）
StoryModeData.StorylineQuestHideoutHiddenDuration = CampaignTime.Hours(6f);
```

## 风险与边界

- **缓存跨战役**：`OnGameEnd()` 只由主线战役结束路径调用。在沙盒战役或异常的加载顺序下，静态字段可能残留上一个战役的 `Kingdom` 引用。判断前先确认 `StoryModeManager.Current != null` 也没用——缓存本身不受它管。
- **`FailedAssert` 在 release 被编译掉**：查不到王国时 dev 版会红字报错、发布版静默返回 null。mod 里直接解引用 `StoryModeData.NorthernEmpireKingdom` 在玩家机器上可能 NRE。
- **`ImperialCulture` 的连锁失败**：北方帝国 null → `ImperialCulture` NRE → `IsKingdomImperial` 全线崩。
- **按 Culture 判帝国不等于按 StringId**：`IsKingdomImperial` 依赖文化对象相等性。如果你的 mod 改写了王国的 Culture，整个主线敌我判定会翻转。
- **`StorylineQuestHideoutHiddenDuration` 是全局可变状态**：没有存档（不是 `[SaveableField]`），读档后回到 12 小时。要持久化得自己存。

## 依赖关系

- [StoryModeManager](../StoryModeManager) — `Destroy()` 是 `OnGameEnd()` 的唯一调用者
- [SecondPhase](../SecondPhase) — `CreateConspiracyClan()` 用 `IsKingdomImperial` 决定向谁宣战
- [MainStoryLine](../MainStoryLine) — `IsOnImperialQuestLine` 是决定敌人集合的另一半条件