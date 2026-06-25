---
title: "TextureProvider"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TextureProvider`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 设置 `target size` 的值或状态。

### GetTextureForRender
`public Texture GetTextureForRender(TwoDimensionContext context, string name = null, bool useHashcodeAsName = false)`

**用途 / Purpose:** 获取 `texture for render` 的当前值。

### Tick
`public virtual void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### Clear
`public virtual void Clear(bool clearNextFrame)`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### SetProperty
`public void SetProperty(string name, object value)`

**用途 / Purpose:** 设置 `property` 的值或状态。

### GetProperty
`public object GetProperty(string name)`

**用途 / Purpose:** 获取 `property` 的当前值。

## 使用示例

```csharp
var implementation = new CustomTextureProvider();
```

## 参见

- [完整类目录](../catalog)