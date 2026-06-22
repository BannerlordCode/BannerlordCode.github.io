<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerComponent`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class BannerComponent : WeaponComponent`
**Base:** `WeaponComponent`
**File:** `TaleWorlds.Core/BannerComponent.cs`

## 概述

`BannerComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<BannerComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要方法

### GetCopy
```csharp
public override ItemComponent GetCopy()
```

### GetBannerEffectBonus
```csharp
public float GetBannerEffectBonus()
```

### Deserialize
```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
```

## 使用示例

```csharp
// BannerComponent (Component) 的典型用法
agent.GetComponent<BannerComponent>();
```

## 参见

- [完整类目录](../catalog)