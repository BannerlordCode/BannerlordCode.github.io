---
title: "AIBehaviorData"
description: "AI 移动决策的不可变快照：记录某支部队在某个位置打算执行的行为，含相等性比较与 Invalid 哨兵值"
---
# AIBehaviorData

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public struct AIBehaviorData : IEquatable<AIBehaviorData>`
**Source:** `TaleWorlds.CampaignSystem/AIBehaviorData.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`AIBehaviorData` 是战役层 AI 系统的**决策快照结构体**。每当 AI 为一支移动部队（`MobileParty`）规划下一步行动时，就会产出一个 `AIBehaviorData`：它把「谁（哪个部队/哪个位置）」「打算做什么（`AiBehavior`）」「怎么走（`NavigationType`）」「是否先集结军队」「是否从港口出发/正驶向港口」打包成一个值。

它是 `struct` 且实现了 `IEquatable<AIBehaviorData>`，因此可以安全地放进字典、列表做去重和比较，不会有意外的引用相等陷阱。

## 心智模型

把它想成一张**便签条**：AI 每做一次决策就写一张便签，贴到地图上。便签上写着——

- **谁**：`Party`（部队对象）或 `Position`（一个坐标点，用于还没有部队实例的纯位置规划）；
- **做什么**：`AiBehavior`（追击、逃跑、前往某地、攻城等行为枚举）；
- **怎么去**：`NavigationType`（陆地、海上等导航方式）；
- **附加标记**：`WillGatherArmy`（出发前是否先集结军队）、`IsFromPort` / `IsTargetingPort`（港口相关标记）。

因为它是**值类型**，两张内容相同的便签就是「相等」的——这正是 `IEquatable` 和 `==` 操作符存在的意义。`Invalid` 是一张**空白便签**，用来表示「没有有效决策」，避免到处返回 `null`。

## 怎么用

### 怎么拿到

- 由战役 AI 系统在内部生成，通常不手动构造；
- 需要构造时有两个入口：给部队用 `IMapPoint` 重载，给纯坐标用 `CampaignVec2` 重载；
- 判断「无决策」用 `AIBehaviorData.Invalid` 或 `==` 比较。

### 典型用法

```csharp
// 比较两个决策是否相同（值语义，逐字段比较）
if (decisionA == decisionB) { /* 同一决策 */ }

// 哨兵值检查
if (decision == AIBehaviorData.Invalid) { /* AI 没有给出有效决策 */ }

// 放进字典做决策缓存
var cache = new Dictionary<AIBehaviorData, float>();
cache[decision] = someScore;
```

### 坑

- 字段全是 **public 字段**（不是属性），直接赋值即可，但不要指望属性变更通知；
- `Party` 与 `Position` 是二选一语义：用 `IMapPoint` 构造时 `Position` 由部队位置填充，用 `CampaignVec2` 构造时 `Party` 为 `null`——比较前要清楚自己拿的是哪一种；
- `GetHashCode` 已重写，可以安全用作字典键，但**不要修改已存入字典的实例字段**（值类型存的是副本，改了也不会反映到键里，这是值类型作键的通用陷阱）。

## 关键成员

- `AIBehaviorData(IMapPoint party, AiBehavior aiBehavior, MobileParty.NavigationType navigationType, bool willGatherArmy, bool isFromPort, bool isTargetingPort)`（`AIBehaviorData.cs:11`）—— 以部队对象构造决策快照。
- `AIBehaviorData(CampaignVec2 position, AiBehavior aiBehavior, MobileParty.NavigationType navigationType, bool willGatherArmy, bool isFromPort, bool isTargetingPort)`（`AIBehaviorData.cs:23`）—— 以纯坐标构造决策快照。
- `Equals(object obj)`（`AIBehaviorData.cs:35`）—— 标准相等入口，内部转发到类型化重载。
- `Equals(AIBehaviorData other)`（`AIBehaviorData.cs:41`）—— 逐字段比较，`IEquatable<AIBehaviorData>` 的实现。
- `GetHashCode()`（`AIBehaviorData.cs:47`）—— 基于各字段生成哈希，支持字典/哈希集使用。
- `operator ==(AIBehaviorData a, AIBehaviorData b)`（`AIBehaviorData.cs:60`）—— 值相等比较。
- `operator !=(AIBehaviorData a, AIBehaviorData b)`（`AIBehaviorData.cs:66`）—— 值不等比较。
- `Invalid`（`AIBehaviorData.cs:72`）—— `static readonly` 哨兵值，表示「无有效决策」。
- `Party`（`AIBehaviorData.cs:75`）—— `IMapPoint` 字段，关联的部队对象。
- `Position`（`AIBehaviorData.cs:78`）—— `CampaignVec2` 字段，决策所在坐标。
- `AiBehavior`（`AIBehaviorData.cs:81`）—— `AiBehavior` 字段，打算执行的行为。
- `WillGatherArmy`（`AIBehaviorData.cs:84`）—— `bool` 字段，出发前是否先集结军队。
- `IsFromPort`（`AIBehaviorData.cs:87`）—— `bool` 字段，是否从港口出发。

## 真实示例

```csharp
// 场景：AI 决策缓存查找
AIBehaviorData key = new AIBehaviorData(
    party.CurrentMapPosition,
    AiBehavior.ApproachParty,
    MobileParty.NavigationType.Land,
    willGatherArmy: false,
    isFromPort: false,
    isTargetingPort: false);

if (decisionCache.TryGetValue(key, out float score))
{
    // 命中缓存：同一部队在同一位置对同一目标的行为已评估过
}

// 场景：过滤掉无效决策
if (decision != AIBehaviorData.Invalid && decision.AiBehavior != AiBehavior.None)
{
    ExecuteDecision(decision);
}
```

## 参见

- [Campaign](../Campaign) —— 战役系统总览，AI 决策的宿主系统
- [Hero](../Hero) —— 英雄类，部队与决策所服务的角色

## 导航

- 返回 [campaign 桶索引](../_index)
- 同批：[ActionNotes](../ActionNotes) / [AddCompanionAction](../AddCompanionAction) / [AddHeroToPartyAction](../AddHeroToPartyAction)
