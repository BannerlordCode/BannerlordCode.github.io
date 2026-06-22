<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WidgetPrefab`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WidgetPrefab

**命名空间:** TaleWorlds.GauntletUI.PrefabSystem
**模块:** TaleWorlds.GauntletUI
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`WidgetPrefab` 是 `TaleWorlds.GauntletUI.PrefabSystem` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `VisualDefinitionTemplates` | `public Dictionary<string, VisualDefinitionTemplate> VisualDefinitionTemplates { get; set; }` |
| `Constants` | `public Dictionary<string, ConstantDefinition> Constants { get; set; }` |
| `Parameters` | `public Dictionary<string, string> Parameters { get; }` |
| `CustomElements` | `public Dictionary<string, XmlElement> CustomElements { get; }` |
| `RootTemplate` | `public WidgetTemplate RootTemplate { get; }` |


## 主要方法

### LoadFrom

```csharp
public static WidgetPrefab LoadFrom(PrefabExtensionContext prefabExtensionContext, WidgetAttributeContext widgetAttributeContext, string path)
```

### Save

```csharp
public XmlDocument Save(PrefabExtensionContext prefabExtensionContext)
```

### Instantiate

```csharp
public WidgetInstantiationResult Instantiate(WidgetCreationData widgetCreationData)
```

### Instantiate

```csharp
public WidgetInstantiationResult Instantiate(WidgetCreationData widgetCreationData, Dictionary<string, WidgetAttributeTemplate> parameters)
```

### OnRelease

```csharp
public void OnRelease()
```

### GetConstantValue

```csharp
public ConstantDefinition GetConstantValue(string name)
```

### GetParameterDefaultValue

```csharp
public string GetParameterDefaultValue(string name)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)