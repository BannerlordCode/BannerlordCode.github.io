<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VisualDefinition`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VisualDefinition

**命名空间:** TaleWorlds.GauntletUI
**模块:** TaleWorlds.GauntletUI
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`VisualDefinition` 是 `TaleWorlds.GauntletUI` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `TransitionDuration` | `public float TransitionDuration { get; }` |
| `DelayOnBegin` | `public float DelayOnBegin { get; }` |
| `EaseType` | `public AnimationInterpolation.Type EaseType { get; }` |
| `EaseFunction` | `public AnimationInterpolation.Function EaseFunction { get; }` |
| `VisualStates` | `public Dictionary<string, VisualState> VisualStates { get; }` |


## 主要方法

### AddVisualState

```csharp
public void AddVisualState(VisualState visualState)
```

### GetVisualState

```csharp
public VisualState GetVisualState(string state)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)