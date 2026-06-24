<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RenderTargetComponent`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# RenderTargetComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class RenderTargetComponent : DotNetObject`
**Base:** `DotNetObject`
**File:** `TaleWorlds.Engine/RenderTargetComponent.cs`

## 概述

`RenderTargetComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `RenderTargetComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `RenderTarget` | `public Texture RenderTarget { get; set; }` |
| `UserData` | `public object UserData { get; set; }` |

## 主要方法

### TextureUpdateEventHandler
`public delegate void TextureUpdateEventHandler(Texture sender, EventArgs e)`

**用途 / Purpose:** 处理 `texture update event handler` 相关逻辑。

## 使用示例

```csharp
var component = agent.GetComponent<RenderTargetComponent>();
```

## 参见

- [完整类目录](../catalog)