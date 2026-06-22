<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignEntityComponent`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignEntityComponent

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignEntityComponent : IEntityComponent`
**Base:** `IEntityComponent`
**File:** `TaleWorlds.CampaignSystem/CampaignEntityComponent.cs`

## 概述

`CampaignEntityComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<CampaignEntityComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要方法

### OnTick
```csharp
public virtual void OnTick(float realDt, float dt)
```

## 使用示例

```csharp
// CampaignEntityComponent (Component) 的典型用法
agent.GetComponent<CampaignEntityComponent>();
```

## 参见

- [完整类目录](../catalog)