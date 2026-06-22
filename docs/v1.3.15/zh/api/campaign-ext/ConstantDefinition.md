<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ConstantDefinition`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ConstantDefinition

**命名空间:** TaleWorlds.GauntletUI.PrefabSystem
**模块:** TaleWorlds.GauntletUI
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`ConstantDefinition` 是 `TaleWorlds.GauntletUI.PrefabSystem` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `Value` | `public string Value { get; set; }` |
| `SpriteName` | `public string SpriteName { get; set; }` |
| `BrushName` | `public string BrushName { get; set; }` |
| `LayerName` | `public string LayerName { get; set; }` |
| `Additive` | `public string Additive { get; set; }` |
| `Prefix` | `public string Prefix { get; set; }` |
| `Suffix` | `public string Suffix { get; set; }` |
| `MultiplyResult` | `public float MultiplyResult { get; set; }` |
| `OnTrueValue` | `public string OnTrueValue { get; set; }` |
| `OnFalseValue` | `public string OnFalseValue { get; set; }` |
| `Type` | `public ConstantDefinitionType Type { get; set; }` |


## 主要方法

### GetValue

```csharp
public string GetValue(BrushFactory brushFactory, SpriteData spriteData, Dictionary<string, ConstantDefinition> constants, Dictionary<string, WidgetAttributeTemplate> parameters, Dictionary<string, string> defaultParameters)
```

### GetActualValueOf

```csharp
public static string GetActualValueOf(string value, BrushFactory brushFactory, SpriteData spriteData, Dictionary<string, ConstantDefinition> constants, Dictionary<string, WidgetAttributeTemplate> parameters, Dictionary<string, string> defaultParameters)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)