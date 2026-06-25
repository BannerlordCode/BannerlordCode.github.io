---
title: "ImageIdentifierVM"
description: "ImageIdentifierVM 的自动生成类参考。"
---
# ImageIdentifierVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.ImageIdentifiers
**Module:** TaleWorlds.Core
**Type:** `public abstract class ImageIdentifierVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection.ImageIdentifiers/ImageIdentifierVM.cs`

## 概述

`ImageIdentifierVM` 位于 `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; set; }` |
| `AdditionalArgs` | `public string AdditionalArgs { get; set; }` |
| `TextureProviderName` | `public string TextureProviderName { get; set; }` |
| `IsEmpty` | `public bool IsEmpty { get; }` |

## 主要方法

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ImageIdentifierVM 实例
ImageIdentifierVM imageIdentifierVM = ...;
imageIdentifierVM.OnFinalize();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
ImageIdentifierVM instance = ...;
```

## 参见

- [本区域目录](../)