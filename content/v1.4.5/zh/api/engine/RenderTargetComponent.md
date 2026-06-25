---
title: "RenderTargetComponent"
description: "RenderTargetComponent 的自动生成类参考。"
---
# RenderTargetComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class RenderTargetComponent : DotNetObject`
**Base:** `DotNetObject`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/RenderTargetComponent.cs`

## 概述

`RenderTargetComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `RenderTargetComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `UserData` | `public object UserData { get; set; }` |

## 主要方法

### TextureUpdateEventHandler
`public delegate void TextureUpdateEventHandler(Texture sender, EventArgs e)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TextureUpdateEventHandler 对应的操作。

```csharp
// 先通过子系统 API 拿到 RenderTargetComponent 实例
RenderTargetComponent renderTargetComponent = ...;
renderTargetComponent.TextureUpdateEventHandler(sender, e);
```

## 使用示例

```csharp
var component = agent.GetComponent<RenderTargetComponent>();
```

## 参见

- [本区域目录](../)