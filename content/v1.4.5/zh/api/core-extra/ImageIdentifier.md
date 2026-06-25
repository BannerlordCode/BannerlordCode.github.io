---
title: "ImageIdentifier"
description: "ImageIdentifier 的自动生成类参考。"
---
# ImageIdentifier

**Namespace:** TaleWorlds.Core.ImageIdentifiers
**Module:** TaleWorlds.Core
**Type:** `public abstract class ImageIdentifier`
**Base:** 无
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core.ImageIdentifiers/ImageIdentifier.cs`

## 概述

`ImageIdentifier` 位于 `TaleWorlds.Core.ImageIdentifiers`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core.ImageIdentifiers` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; set; }` |
| `TextureProviderName` | `public string TextureProviderName { get; set; }` |
| `AdditionalArgs` | `public string AdditionalArgs { get; set; }` |

## 主要方法

### Equals
`public bool Equals(ImageIdentifier other)`

**用途 / Purpose:** **用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 ImageIdentifier 实例
ImageIdentifier imageIdentifier = ...;
var result = imageIdentifier.Equals(other);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
ImageIdentifier instance = ...;
```

## 参见

- [本区域目录](../)