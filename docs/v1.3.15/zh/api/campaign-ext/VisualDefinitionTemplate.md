<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VisualDefinitionTemplate`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VisualDefinitionTemplate

**命名空间:** TaleWorlds.GauntletUI.PrefabSystem
**模块:** TaleWorlds.GauntletUI
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`VisualDefinitionTemplate` 是 `TaleWorlds.GauntletUI.PrefabSystem` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `TransitionDuration` | `public float TransitionDuration { get; set; }` |
| `DelayOnBegin` | `public float DelayOnBegin { get; set; }` |
| `EaseType` | `public AnimationInterpolation.Type EaseType { get; set; }` |
| `EaseFunction` | `public AnimationInterpolation.Function EaseFunction { get; }` |
| `VisualStates` | `public Dictionary<string, VisualStateTemplate> VisualStates { get; }` |


## 主要方法

### AddVisualState

```csharp
public void AddVisualState(VisualStateTemplate visualState)
```

### CreateVisualDefinition

```csharp
public VisualDefinition CreateVisualDefinition(BrushFactory brushFactory, SpriteData spriteData, Dictionary<string, VisualDefinitionTemplate> visualDefinitionTemplates, Dictionary<string, ConstantDefinition> constants, Dictionary<string, WidgetAttributeTemplate> parameters, Dictionary<string, string> defaultParameters)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)