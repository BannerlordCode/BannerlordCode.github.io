---
title: "View"
description: "View 的自动生成类参考。"
---
# View

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public abstract class View : NativeObject`
**Base:** `NativeObject`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/View.cs`

## 概述

`View` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetScale
`public void SetScale(Vec2 scale)`

**用途 / Purpose:** 为 「scale」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 View 实例
View view = ...;
view.SetScale(scale);
```

### SetOffset
`public void SetOffset(Vec2 offset)`

**用途 / Purpose:** 为 「offset」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 View 实例
View view = ...;
view.SetOffset(offset);
```

### SetRenderOrder
`public void SetRenderOrder(int value)`

**用途 / Purpose:** 为 「render order」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 View 实例
View view = ...;
view.SetRenderOrder(0);
```

### SetRenderOption
`public void SetRenderOption(ViewRenderOptions optionEnum, bool value)`

**用途 / Purpose:** 为 「render option」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 View 实例
View view = ...;
view.SetRenderOption(optionEnum, false);
```

### SetRenderTarget
`public void SetRenderTarget(Texture texture)`

**用途 / Purpose:** 为 「render target」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 View 实例
View view = ...;
view.SetRenderTarget(texture);
```

### SetDepthTarget
`public void SetDepthTarget(Texture texture)`

**用途 / Purpose:** 为 「depth target」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 View 实例
View view = ...;
view.SetDepthTarget(texture);
```

### DontClearBackground
`public void DontClearBackground()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 View 实例
View view = ...;
view.DontClearBackground();
```

### SetClearColor
`public void SetClearColor(uint rgba)`

**用途 / Purpose:** 为 「clear color」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 View 实例
View view = ...;
view.SetClearColor(0);
```

### SetEnable
`public void SetEnable(bool value)`

**用途 / Purpose:** 为 「enable」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 View 实例
View view = ...;
view.SetEnable(false);
```

### SetRenderOnDemand
`public void SetRenderOnDemand(bool value)`

**用途 / Purpose:** 为 「render on demand」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 View 实例
View view = ...;
view.SetRenderOnDemand(false);
```

### SetAutoDepthTargetCreation
`public void SetAutoDepthTargetCreation(bool value)`

**用途 / Purpose:** 为 「auto depth target creation」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 View 实例
View view = ...;
view.SetAutoDepthTargetCreation(false);
```

### SetSaveFinalResultToDisk
`public void SetSaveFinalResultToDisk(bool value)`

**用途 / Purpose:** 为 「save final result to disk」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 View 实例
View view = ...;
view.SetSaveFinalResultToDisk(false);
```

### SetFileNameToSaveResult
`public void SetFileNameToSaveResult(string name)`

**用途 / Purpose:** 为 「file name to save result」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 View 实例
View view = ...;
view.SetFileNameToSaveResult("example");
```

### SetFileTypeToSave
`public void SetFileTypeToSave(TextureSaveFormat format)`

**用途 / Purpose:** 为 「file type to save」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 View 实例
View view = ...;
view.SetFileTypeToSave(format);
```

### SetFilePathToSaveResult
`public void SetFilePathToSaveResult(string name)`

**用途 / Purpose:** 为 「file path to save result」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 View 实例
View view = ...;
view.SetFilePathToSaveResult("example");
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
View instance = ...;
```

## 参见

- [本区域目录](../)