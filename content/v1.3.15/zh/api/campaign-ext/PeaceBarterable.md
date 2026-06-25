---
title: "PeaceBarterable"
description: "PeaceBarterable 的自动生成类参考。"
---
# PeaceBarterable

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem.Barterables
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PeaceBarterable : Barterable`
**Base:** `Barterable`
**File:** `TaleWorlds.CampaignSystem/BarterSystem/Barterables/PeaceBarterable.cs`

## 概述

`PeaceBarterable` 位于 `TaleWorlds.CampaignSystem.BarterSystem.Barterables`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.BarterSystem.Barterables` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Duration` | `public CampaignTime Duration { get; }` |
| `StringID` | `public override string StringID { get; }` |
| `Name` | `public override TextObject Name { get; }` |

## 主要方法

### GetUnitValueForFaction
`public override int GetUnitValueForFaction(IFaction factionToEvaluateFor)`

**用途 / Purpose:** 读取并返回当前对象中 「unit value for faction」 的结果。

```csharp
// 先通过子系统 API 拿到 PeaceBarterable 实例
PeaceBarterable peaceBarterable = ...;
var result = peaceBarterable.GetUnitValueForFaction(factionToEvaluateFor);
```

### IsCompatible
`public override bool IsCompatible(Barterable barterable)`

**用途 / Purpose:** 判断当前对象是否处于 「compatible」 状态或条件。

```csharp
// 先通过子系统 API 拿到 PeaceBarterable 实例
PeaceBarterable peaceBarterable = ...;
var result = peaceBarterable.IsCompatible(barterable);
```

### GetVisualIdentifier
`public override ImageIdentifier GetVisualIdentifier()`

**用途 / Purpose:** 读取并返回当前对象中 「visual identifier」 的结果。

```csharp
// 先通过子系统 API 拿到 PeaceBarterable 实例
PeaceBarterable peaceBarterable = ...;
var result = peaceBarterable.GetVisualIdentifier();
```

### GetEncyclopediaLink
`public override string GetEncyclopediaLink()`

**用途 / Purpose:** 读取并返回当前对象中 「encyclopedia link」 的结果。

```csharp
// 先通过子系统 API 拿到 PeaceBarterable 实例
PeaceBarterable peaceBarterable = ...;
var result = peaceBarterable.GetEncyclopediaLink();
```

### Apply
`public override void Apply()`

**用途 / Purpose:** 将当前对象的效果应用到目标。

```csharp
// 先通过子系统 API 拿到 PeaceBarterable 实例
PeaceBarterable peaceBarterable = ...;
peaceBarterable.Apply();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PeaceBarterable peaceBarterable = ...;
peaceBarterable.GetUnitValueForFaction(factionToEvaluateFor);
```

## 参见

- [本区域目录](../)