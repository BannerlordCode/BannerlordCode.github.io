---
title: "FactionManager"
description: "FactionManager 的自动生成类参考。"
---
# FactionManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class FactionManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/FactionManager.cs`

## 概述

`FactionManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `FactionManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static FactionManager Instance { get; }` |

## 主要方法

### DeclareWar
`public static void DeclareWar(IFaction faction1, IFaction faction2)`

**用途 / Purpose:** 处理与 「declare war」 相关的逻辑。

```csharp
// 静态调用，不需要实例
FactionManager.DeclareWar(faction1, faction2);
```

### SetNeutral
`public static void SetNeutral(IFaction faction1, IFaction faction2)`

**用途 / Purpose:** 为 「neutral」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
FactionManager.SetNeutral(faction1, faction2);
```

### IsAtWarAgainstFaction
`public static bool IsAtWarAgainstFaction(IFaction faction1, IFaction faction2)`

**用途 / Purpose:** 判断当前对象是否处于 「at war against faction」 状态或条件。

```csharp
// 静态调用，不需要实例
FactionManager.IsAtWarAgainstFaction(faction1, faction2);
```

### IsAtConstantWarAgainstFaction
`public static bool IsAtConstantWarAgainstFaction(IFaction faction1, IFaction faction2)`

**用途 / Purpose:** 判断当前对象是否处于 「at constant war against faction」 状态或条件。

```csharp
// 静态调用，不需要实例
FactionManager.IsAtConstantWarAgainstFaction(faction1, faction2);
```

### IsNeutralWithFaction
`public static bool IsNeutralWithFaction(IFaction faction1, IFaction faction2)`

**用途 / Purpose:** 判断当前对象是否处于 「neutral with faction」 状态或条件。

```csharp
// 静态调用，不需要实例
FactionManager.IsNeutralWithFaction(faction1, faction2);
```

### GetRelationBetweenClans
`public static int GetRelationBetweenClans(Clan clan1, Clan clan2)`

**用途 / Purpose:** 读取并返回当前对象中 「relation between clans」 的结果。

```csharp
// 静态调用，不需要实例
FactionManager.GetRelationBetweenClans(clan1, clan2);
```

## 使用示例

```csharp
var manager = FactionManager.Current;
```

## 参见

- [本区域目录](../)