<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WidgetTemplate`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WidgetTemplate

**命名空间:** TaleWorlds.GauntletUI.PrefabSystem
**模块:** TaleWorlds.GauntletUI
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`WidgetTemplate` 是 `TaleWorlds.GauntletUI.PrefabSystem` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `LogicalChildrenLocation` | `public bool LogicalChildrenLocation { get; }` |
| `Id` | `public string Id { get; }` |
| `Type` | `public string Type { get; }` |
| `ChildCount` | `public int ChildCount { get; }` |
| `GivenParameters` | `public Dictionary<string, WidgetAttributeTemplate> GivenParameters { get; }` |
| `Prefab` | `public WidgetPrefab Prefab { get; }` |
| `RootTemplate` | `public WidgetTemplate RootTemplate { get; }` |
| `Attributes` | `public Dictionary<Type, Dictionary<string, WidgetAttributeTemplate>> Attributes { get; set; }` |
| `Tag` | `public object Tag { get; set; }` |
| `AllAttributes` | `public IEnumerable<WidgetAttributeTemplate> AllAttributes { get; }` |


## 主要方法

### AddExtensionData

```csharp
public void AddExtensionData(string name, object data)
```

### RemoveExtensionData

```csharp
public void RemoveExtensionData(string name)
```

### AddExtensionData

```csharp
public void AddExtensionData(object data)
```

### SetAttribute

```csharp
public void SetAttribute(WidgetAttributeTemplate attribute)
```

### GetChildAt

```csharp
public WidgetTemplate GetChildAt(int i)
```

### AddChild

```csharp
public void AddChild(WidgetTemplate child)
```

### RemoveChild

```csharp
public void RemoveChild(WidgetTemplate child)
```

### SwapChildren

```csharp
public void SwapChildren(WidgetTemplate child1, WidgetTemplate child2)
```

### Instantiate

```csharp
public WidgetInstantiationResult Instantiate(WidgetCreationData widgetCreationData, Dictionary<string, WidgetAttributeTemplate> parameters)
```

### OnRelease

```csharp
public void OnRelease()
```

### LoadFrom

```csharp
public static WidgetTemplate LoadFrom(PrefabExtensionContext prefabExtensionContext, WidgetAttributeContext widgetAttributeContext, XmlNode node)
```

### SetRootTemplate

```csharp
public void SetRootTemplate(WidgetPrefab prefab)
```

### AddAttributeTo

```csharp
public void AddAttributeTo(WidgetAttributeContext widgetAttributeContext, string name, string value)
```

### RemoveAttributeFrom

```csharp
public void RemoveAttributeFrom(WidgetAttributeContext widgetAttributeContext, string fullName)
```

### RemoveAttributeFrom

```csharp
public void RemoveAttributeFrom(WidgetAttributeKeyType keyType, string name)
```

### Save

```csharp
public void Save(PrefabExtensionContext prefabExtensionContext, XmlNode parentNode)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)