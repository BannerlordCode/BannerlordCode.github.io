---
title: "IncidentHelper"
description: "可复现的随机挑选工具：用主队种子的随机从列表里挑一个元素，同一个 seed 在同一状态下给出同一个元素。"
---

# IncidentHelper

**Namespace:** Helpers
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class IncidentHelper`
**Base:** 无（静态类）
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/Helpers/IncidentHelper.cs`

## 概述

本类的全部价值是「同一个 seed 在同一状态下给出同一个元素」（可复现的随机挑选），用于事件/遭遇那种需要「重放一致」的场景。它与 `MiscHelper.GenerateCampaignId` 正好相反：那个用无种子的 `new Random`，本类用主队的**带种子**随机。三个重载分别处理 `List<T>`、`MBList<T>`、`MBReadOnlyList<T>` 三种容器类型。

## 心智模型

把 IncidentHelper 想成「可复现的随机挑选器」：普通 `Random` 每次调用结果不同，本类用 `MobileParty.MainParty.RandomIntWithSeed((uint)seed, list.Count)` 保证同一个 seed 在同一状态下给出同一个元素。关键设计决策是**随机源是 `MobileParty.MainParty`**——这意味着结果**依赖玩家主队的随机数状态**，不是全局随机。三个重载**只差容器类型**，算法完全相同（不是三种不同策略）。空集合返回 `default(T)`——引用类型是 `null`、值类型是 0/默认结构，调用方必须自己判。

## 怎么用

### 怎么拿到它

静态类，直接 `IncidentHelper.GetSeededRandomElement(list, seed)` 调用。三个重载分别接受 `List<T>`、`MBList<T>`、`MBReadOnlyList<T>`。

### 典型用法

- 要在事件/遭遇里做可复现的随机挑选时，用 `GetSeededRandomElement(options, seed)`。
- 同一个 seed 在同一状态下给出同一个元素——用于需要「重放一致」的场景。
- 空集合返回 `default(T)`，调用方必须自己判 null。

### 最容易踩的坑

- **随机源是 `MobileParty.MainParty`**（第 19/29/39 行）⇒ 结果**依赖玩家主队的随机数状态**，不是全局随机；`MainParty` 为 null（不在战役里）会 NRE。
- `seed` 是 `long` 却被强转 **`(uint)` 截断到低 32 位**（第 19/29/39 行）⇒ 两个只在高 32 位不同的 seed 会得到**同一结果**。
- 三个重载**只差容器类型**，算法完全相同（不是三种不同策略）。
- 空集合返回 `default(T)`——引用类型是 `null`、值类型是 0/默认结构，**调用方必须自己判**。

## 关键成员

- `public static T GetSeededRandomElement<T>(List<T> list, long seed)` —— 空集合保护 `list == null || list.Count == 0` → `default(T)`；否则 `list[MobileParty.MainParty.RandomIntWithSeed((uint)seed, list.Count)]`。随机源是主队，seed 截断到低 32 位。`IncidentHelper.cs:13`
- `public static T GetSeededRandomElement<T>(MBList<T> list, long seed)` —— 同上，`MBList<T>` 版。`IncidentHelper.cs:23`
- `public static T GetSeededRandomElement<T>(MBReadOnlyList<T> list, long seed)` —— 同上，`MBReadOnlyList<T>` 版。`IncidentHelper.cs:33`

## 真实示例

```csharp
// 用主队种子的随机从列表里挑一个元素
List<string> options = new List<string> { "A", "B", "C" };
string picked = IncidentHelper.GetSeededRandomElement(options, 42L);
// 同一个 seed 在同一状态下给出同一个元素
string picked2 = IncidentHelper.GetSeededRandomElement(options, 42L);
Debug.Print($"picked={picked} picked2={picked2} mainParty={MobileParty.MainParty.Name}");
```

## 参见

- ↔ [MiscHelper](../MiscHelper) —— 同桶对照：`MiscHelper.GenerateCampaignId` 用的是无种子的 `new Random`，本类用主队种子的随机
- ↔ [Campaign](../../campaign/Campaign) —— 随机源是 `MobileParty.MainParty`，属战役世界对象

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
