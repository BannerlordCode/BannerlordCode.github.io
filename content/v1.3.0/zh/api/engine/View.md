---
title: "View"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `View`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# View

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public abstract class View : NativeObject`
**Base:** `NativeObject`
**File:** `TaleWorlds.Engine/View.cs`

## 概述

`View` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetScale
`public void SetScale(Vec2 scale)`

**用途 / Purpose:** 设置 `scale` 的值或状态。

### SetOffset
`public void SetOffset(Vec2 offset)`

**用途 / Purpose:** 设置 `offset` 的值或状态。

### SetRenderOrder
`public void SetRenderOrder(int value)`

**用途 / Purpose:** 设置 `render order` 的值或状态。

### SetRenderOption
`public void SetRenderOption(View.ViewRenderOptions optionEnum, bool value)`

**用途 / Purpose:** 设置 `render option` 的值或状态。

### SetRenderTarget
`public void SetRenderTarget(Texture texture)`

**用途 / Purpose:** 设置 `render target` 的值或状态。

### SetDepthTarget
`public void SetDepthTarget(Texture texture)`

**用途 / Purpose:** 设置 `depth target` 的值或状态。

### DontClearBackground
`public void DontClearBackground()`

**用途 / Purpose:** 处理 `dont clear background` 相关逻辑。

### SetClearColor
`public void SetClearColor(uint rgba)`

**用途 / Purpose:** 设置 `clear color` 的值或状态。

### SetEnable
`public void SetEnable(bool value)`

**用途 / Purpose:** 设置 `enable` 的值或状态。

### SetRenderOnDemand
`public void SetRenderOnDemand(bool value)`

**用途 / Purpose:** 设置 `render on demand` 的值或状态。

### SetAutoDepthTargetCreation
`public void SetAutoDepthTargetCreation(bool value)`

**用途 / Purpose:** 设置 `auto depth target creation` 的值或状态。

### SetSaveFinalResultToDisk
`public void SetSaveFinalResultToDisk(bool value)`

**用途 / Purpose:** 设置 `save final result to disk` 的值或状态。

### SetFileNameToSaveResult
`public void SetFileNameToSaveResult(string name)`

**用途 / Purpose:** 设置 `file name to save result` 的值或状态。

### SetFileTypeToSave
`public void SetFileTypeToSave(View.TextureSaveFormat format)`

**用途 / Purpose:** 设置 `file type to save` 的值或状态。

### SetFilePathToSaveResult
`public void SetFilePathToSaveResult(string name)`

**用途 / Purpose:** 设置 `file path to save result` 的值或状态。

## 使用示例

```csharp
var implementation = new CustomView();
```

## 参见

- [完整类目录](../catalog)