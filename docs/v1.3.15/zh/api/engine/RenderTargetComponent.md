<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RenderTargetComponent`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RenderTargetComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class RenderTargetComponent : DotNetObject`
**Base:** `DotNetObject`
**File:** `TaleWorlds.Engine/RenderTargetComponent.cs`

## 概述

`RenderTargetComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<RenderTargetComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要属性

| Name | Signature |
|------|-----------|
| `RenderTarget` | `public Texture RenderTarget { get { return (Texture)this._renderTargetWeakReference.GetNativeObject(); }` |
| `UserData` | `public object UserData { get; internal set; }` |

## 主要方法

### TextureUpdateEventHandler
```csharp
public delegate void TextureUpdateEventHandler(Texture sender, EventArgs e)
```

## 使用示例

```csharp
// RenderTargetComponent (Component) 的典型用法
agent.GetComponent<RenderTargetComponent>();
```

## 参见

- [完整类目录](../catalog)