---
title: "TextureProvider"
description: "TextureProvider 的自动生成类参考。"
---
# TextureProvider

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public abstract class TextureProvider`
**Base:** 无
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/TextureProvider.cs`

## 概述

`TextureProvider` 位于 `TaleWorlds.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetTargetSize
`public virtual void SetTargetSize(int width, int height)`

**用途 / Purpose:** 为 「target size」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TextureProvider 实例
TextureProvider textureProvider = ...;
textureProvider.SetTargetSize(0, 0);
```

### GetTextureForRender
`public Texture GetTextureForRender(TwoDimensionContext context, string name = null, bool useHashcodeAsName = false)`

**用途 / Purpose:** 读取并返回当前对象中 「texture for render」 的结果。

```csharp
// 先通过子系统 API 拿到 TextureProvider 实例
TextureProvider textureProvider = ...;
var result = textureProvider.GetTextureForRender(context, "example", false);
```

### Tick
`public virtual void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 TextureProvider 实例
TextureProvider textureProvider = ...;
textureProvider.Tick(0);
```

### Clear
`public virtual void Clear(bool clearNextFrame)`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 TextureProvider 实例
TextureProvider textureProvider = ...;
textureProvider.Clear(false);
```

### SetProperty
`public void SetProperty(string name, object value)`

**用途 / Purpose:** 为 「property」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TextureProvider 实例
TextureProvider textureProvider = ...;
textureProvider.SetProperty("example", value);
```

### GetProperty
`public object GetProperty(string name)`

**用途 / Purpose:** 读取并返回当前对象中 「property」 的结果。

```csharp
// 先通过子系统 API 拿到 TextureProvider 实例
TextureProvider textureProvider = ...;
var result = textureProvider.GetProperty("example");
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
TextureProvider instance = ...;
```

## 参见

- [本区域目录](../)