---
title: "BannerEffect"
description: "BannerEffect 的自动生成类参考。"
---
# BannerEffect

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class BannerEffect : PropertyObject`
**Base:** `PropertyObject`
**File:** `TaleWorlds.Core/BannerEffect.cs`

## 概述

`BannerEffect` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IncrementType` | `public EffectIncrementType IncrementType { get; }` |

## 主要方法

### Initialize
`public void Initialize(string name, string description, float level1Bonus, float level2Bonus, float level3Bonus, EffectIncrementType incrementType)`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BannerEffect 实例
BannerEffect bannerEffect = ...;
bannerEffect.Initialize("example", "example", 0, 0, 0, incrementType);
```

### GetBonusAtLevel
`public float GetBonusAtLevel(int bannerLevel)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 bonus at level 的结果。

```csharp
// 先通过子系统 API 拿到 BannerEffect 实例
BannerEffect bannerEffect = ...;
var result = bannerEffect.GetBonusAtLevel(0);
```

### GetBonusStringAtLevel
`public string GetBonusStringAtLevel(int bannerLevel)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 bonus string at level 的结果。

```csharp
// 先通过子系统 API 拿到 BannerEffect 实例
BannerEffect bannerEffect = ...;
var result = bannerEffect.GetBonusStringAtLevel(0);
```

### GetDescription
`public TextObject GetDescription(int bannerLevel)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 description 的结果。

```csharp
// 先通过子系统 API 拿到 BannerEffect 实例
BannerEffect bannerEffect = ...;
var result = bannerEffect.GetDescription(0);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 BannerEffect 实例
BannerEffect bannerEffect = ...;
var result = bannerEffect.ToString();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BannerEffect bannerEffect = ...;
bannerEffect.Initialize("example", "example", 0, 0, 0, incrementType);
```

## 参见

- [本区域目录](../)