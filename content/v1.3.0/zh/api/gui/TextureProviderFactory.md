---
title: "TextureProviderFactory"
description: "TextureProviderFactory 的自动生成类参考。"
---
# TextureProviderFactory

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public static class TextureProviderFactory`
**Base:** 无
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/TextureProviderFactory.cs`

## 概述

`TextureProviderFactory` 位于 `TaleWorlds.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateInstance
`public static TextureProvider CreateInstance(string textureProviderName)`

**用途 / Purpose:** 构建一个新的 「instance」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
TextureProviderFactory.CreateInstance("example");
```

### RefreshProviderTypes
`public static void RefreshProviderTypes()`

**用途 / Purpose:** 使 「provider types」 的显示或缓存与底层状态保持一致。

```csharp
// 静态调用，不需要实例
TextureProviderFactory.RefreshProviderTypes();
```

## 使用示例

```csharp
TextureProviderFactory.CreateInstance("example");
```

## 参见

- [本区域目录](../)