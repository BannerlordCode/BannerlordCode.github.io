---
title: "DefaultEncyclopediaConceptPage"
description: "DefaultEncyclopediaConceptPage 的自动生成类参考。"
---
# DefaultEncyclopediaConceptPage

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEncyclopediaConceptPage : EncyclopediaPage`
**Base:** `EncyclopediaPage`
**File:** `TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaConceptPage.cs`

## 概述

`DefaultEncyclopediaConceptPage` 位于 `TaleWorlds.CampaignSystem.Encyclopedia.Pages`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Encyclopedia.Pages` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetViewFullyQualifiedName
`public override string GetViewFullyQualifiedName()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 view fully qualified name 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultEncyclopediaConceptPage 实例
DefaultEncyclopediaConceptPage defaultEncyclopediaConceptPage = ...;
var result = defaultEncyclopediaConceptPage.GetViewFullyQualifiedName();
```

### GetName
`public override TextObject GetName()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 name 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultEncyclopediaConceptPage 实例
DefaultEncyclopediaConceptPage defaultEncyclopediaConceptPage = ...;
var result = defaultEncyclopediaConceptPage.GetName();
```

### GetDescriptionText
`public override TextObject GetDescriptionText()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 description text 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultEncyclopediaConceptPage 实例
DefaultEncyclopediaConceptPage defaultEncyclopediaConceptPage = ...;
var result = defaultEncyclopediaConceptPage.GetDescriptionText();
```

### GetStringID
`public override string GetStringID()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 string i d 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultEncyclopediaConceptPage 实例
DefaultEncyclopediaConceptPage defaultEncyclopediaConceptPage = ...;
var result = defaultEncyclopediaConceptPage.GetStringID();
```

### IsValidEncyclopediaItem
`public override bool IsValidEncyclopediaItem(object o)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 valid encyclopedia item 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultEncyclopediaConceptPage 实例
DefaultEncyclopediaConceptPage defaultEncyclopediaConceptPage = ...;
var result = defaultEncyclopediaConceptPage.IsValidEncyclopediaItem(o);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
DefaultEncyclopediaConceptPage defaultEncyclopediaConceptPage = ...;
defaultEncyclopediaConceptPage.GetViewFullyQualifiedName();
```

## 参见

- [本区域目录](../)