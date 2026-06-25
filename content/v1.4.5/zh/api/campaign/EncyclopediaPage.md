---
title: "EncyclopediaPage"
description: "EncyclopediaPage 的自动生成类参考。"
---
# EncyclopediaPage

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EncyclopediaPage`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Encyclopedia/EncyclopediaPage.cs`

## 概述

`EncyclopediaPage` 位于 `TaleWorlds.CampaignSystem.Encyclopedia`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Encyclopedia` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `HomePageOrderIndex` | `public int HomePageOrderIndex { get; set; }` |
| `Parent` | `public EncyclopediaPage Parent { get; }` |

## 主要方法

### IsRelevant
`public virtual bool IsRelevant()`

**用途 / Purpose:** 判断当前对象是否处于 「relevant」 状态或条件。

```csharp
// 先通过子系统 API 拿到 EncyclopediaPage 实例
EncyclopediaPage encyclopediaPage = ...;
var result = encyclopediaPage.IsRelevant();
```

### HasIdentifierType
`public bool HasIdentifierType(Type identifierType)`

**用途 / Purpose:** 判断当前对象是否已经持有 「identifier type」。

```csharp
// 先通过子系统 API 拿到 EncyclopediaPage 实例
EncyclopediaPage encyclopediaPage = ...;
var result = encyclopediaPage.HasIdentifierType(identifierType);
```

### GetIdentifier
`public string GetIdentifier(Type identifierType)`

**用途 / Purpose:** 读取并返回当前对象中 「identifier」 的结果。

```csharp
// 先通过子系统 API 拿到 EncyclopediaPage 实例
EncyclopediaPage encyclopediaPage = ...;
var result = encyclopediaPage.GetIdentifier(identifierType);
```

### GetIdentifierNames
`public string GetIdentifierNames()`

**用途 / Purpose:** 读取并返回当前对象中 「identifier names」 的结果。

```csharp
// 先通过子系统 API 拿到 EncyclopediaPage 实例
EncyclopediaPage encyclopediaPage = ...;
var result = encyclopediaPage.GetIdentifierNames();
```

### IsFiltered
`public bool IsFiltered(object o)`

**用途 / Purpose:** 判断当前对象是否处于 「filtered」 状态或条件。

```csharp
// 先通过子系统 API 拿到 EncyclopediaPage 实例
EncyclopediaPage encyclopediaPage = ...;
var result = encyclopediaPage.IsFiltered(o);
```

### GetViewFullyQualifiedName
`public virtual string GetViewFullyQualifiedName()`

**用途 / Purpose:** 读取并返回当前对象中 「view fully qualified name」 的结果。

```csharp
// 先通过子系统 API 拿到 EncyclopediaPage 实例
EncyclopediaPage encyclopediaPage = ...;
var result = encyclopediaPage.GetViewFullyQualifiedName();
```

### GetStringID
`public virtual string GetStringID()`

**用途 / Purpose:** 读取并返回当前对象中 「string i d」 的结果。

```csharp
// 先通过子系统 API 拿到 EncyclopediaPage 实例
EncyclopediaPage encyclopediaPage = ...;
var result = encyclopediaPage.GetStringID();
```

### GetName
`public virtual TextObject GetName()`

**用途 / Purpose:** 读取并返回当前对象中 「name」 的结果。

```csharp
// 先通过子系统 API 拿到 EncyclopediaPage 实例
EncyclopediaPage encyclopediaPage = ...;
var result = encyclopediaPage.GetName();
```

### GetObject
`public virtual MBObjectBase GetObject(string typeName, string stringID)`

**用途 / Purpose:** 读取并返回当前对象中 「object」 的结果。

```csharp
// 先通过子系统 API 拿到 EncyclopediaPage 实例
EncyclopediaPage encyclopediaPage = ...;
var result = encyclopediaPage.GetObject("example", "example");
```

### IsValidEncyclopediaItem
`public virtual bool IsValidEncyclopediaItem(object o)`

**用途 / Purpose:** 判断当前对象是否处于 「valid encyclopedia item」 状态或条件。

```csharp
// 先通过子系统 API 拿到 EncyclopediaPage 实例
EncyclopediaPage encyclopediaPage = ...;
var result = encyclopediaPage.IsValidEncyclopediaItem(o);
```

### GetDescriptionText
`public virtual TextObject GetDescriptionText()`

**用途 / Purpose:** 读取并返回当前对象中 「description text」 的结果。

```csharp
// 先通过子系统 API 拿到 EncyclopediaPage 实例
EncyclopediaPage encyclopediaPage = ...;
var result = encyclopediaPage.GetDescriptionText();
```

### GetListItems
`public IEnumerable<EncyclopediaListItem> GetListItems()`

**用途 / Purpose:** 读取并返回当前对象中 「list items」 的结果。

```csharp
// 先通过子系统 API 拿到 EncyclopediaPage 实例
EncyclopediaPage encyclopediaPage = ...;
var result = encyclopediaPage.GetListItems();
```

### GetFilterItems
`public IEnumerable<EncyclopediaFilterGroup> GetFilterItems()`

**用途 / Purpose:** 读取并返回当前对象中 「filter items」 的结果。

```csharp
// 先通过子系统 API 拿到 EncyclopediaPage 实例
EncyclopediaPage encyclopediaPage = ...;
var result = encyclopediaPage.GetFilterItems();
```

### GetSortControllers
`public IEnumerable<EncyclopediaSortController> GetSortControllers()`

**用途 / Purpose:** 读取并返回当前对象中 「sort controllers」 的结果。

```csharp
// 先通过子系统 API 拿到 EncyclopediaPage 实例
EncyclopediaPage encyclopediaPage = ...;
var result = encyclopediaPage.GetSortControllers();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
EncyclopediaPage instance = ...;
```

## 参见

- [本区域目录](../)