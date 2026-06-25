---
title: "Barterable"
description: "Barterable 的自动生成类参考。"
---
# Barterable

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem.Barterables
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class Barterable`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/BarterSystem/Barterables/Barterable.cs`

## 概述

`Barterable` 位于 `TaleWorlds.CampaignSystem.BarterSystem.Barterables`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.BarterSystem.Barterables` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `StringID` | `public abstract string StringID { get; }` |
| `OriginalOwner` | `public Hero OriginalOwner { get; }` |
| `OriginalParty` | `public PartyBase OriginalParty { get; }` |
| `Name` | `public abstract TextObject Name { get; }` |
| `MaxAmount` | `public virtual int MaxAmount { get; set; }` |
| `CurrentAmount` | `public int CurrentAmount { get; set; }` |
| `IsOffered` | `public bool IsOffered { get; set; }` |
| `IsContextDependent` | `public bool IsContextDependent { get; set; }` |
| `Group` | `public BarterGroup Group { get; set; }` |
| `LinkedBarterables` | `public MBReadOnlyList<Barterable> LinkedBarterables { get; }` |
| `Side` | `public Barterable.BarterSide Side { get; }` |

## 主要方法

### GetValueForFaction
`public int GetValueForFaction(IFaction faction)`

**用途 / Purpose:** 读取并返回当前对象中 value for faction 的结果。

```csharp
// 先通过子系统 API 拿到 Barterable 实例
Barterable barterable = ...;
var result = barterable.GetValueForFaction(faction);
```

### CheckBarterLink
`public virtual void CheckBarterLink(Barterable linkedBarterable)`

**用途 / Purpose:** 检查barter link在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 Barterable 实例
Barterable barterable = ...;
barterable.CheckBarterLink(linkedBarterable);
```

### GetUnitValueForFaction
`public abstract int GetUnitValueForFaction(IFaction faction)`

**用途 / Purpose:** 读取并返回当前对象中 unit value for faction 的结果。

```csharp
// 先通过子系统 API 拿到 Barterable 实例
Barterable barterable = ...;
var result = barterable.GetUnitValueForFaction(faction);
```

### SetIsOffered
`public void SetIsOffered(bool value)`

**用途 / Purpose:** 为 is offered 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Barterable 实例
Barterable barterable = ...;
barterable.SetIsOffered(false);
```

### AddBarterLink
`public void AddBarterLink(Barterable barterable)`

**用途 / Purpose:** 将 barter link 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Barterable 实例
Barterable barterable = ...;
barterable.AddBarterLink(barterable);
```

### Initialize
`public void Initialize(BarterGroup barterGroup, bool isContextDependent)`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 Barterable 实例
Barterable barterable = ...;
barterable.Initialize(barterGroup, false);
```

### IsCompatible
`public virtual bool IsCompatible(Barterable barterable)`

**用途 / Purpose:** 判断当前对象是否处于 compatible 状态或条件。

```csharp
// 先通过子系统 API 拿到 Barterable 实例
Barterable barterable = ...;
var result = barterable.IsCompatible(barterable);
```

### GetVisualIdentifier
`public abstract ImageIdentifier GetVisualIdentifier()`

**用途 / Purpose:** 读取并返回当前对象中 visual identifier 的结果。

```csharp
// 先通过子系统 API 拿到 Barterable 实例
Barterable barterable = ...;
var result = barterable.GetVisualIdentifier();
```

### GetEncyclopediaLink
`public virtual string GetEncyclopediaLink()`

**用途 / Purpose:** 读取并返回当前对象中 encyclopedia link 的结果。

```csharp
// 先通过子系统 API 拿到 Barterable 实例
Barterable barterable = ...;
var result = barterable.GetEncyclopediaLink();
```

### Apply
`public abstract void Apply()`

**用途 / Purpose:** 将当前对象的效果应用到目标。

```csharp
// 先通过子系统 API 拿到 Barterable 实例
Barterable barterable = ...;
barterable.Apply();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
Barterable instance = ...;
```

## 参见

- [本区域目录](../)