<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WidgetFactory`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WidgetFactory

**命名空间:** TaleWorlds.GauntletUI.PrefabSystem
**模块:** TaleWorlds.GauntletUI
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`WidgetFactory` 是 `TaleWorlds.GauntletUI.PrefabSystem` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `PrefabExtensionContext` | `public PrefabExtensionContext PrefabExtensionContext { get; }` |
| `WidgetAttributeContext` | `public WidgetAttributeContext WidgetAttributeContext { get; }` |
| `GeneratedPrefabContext` | `public GeneratedPrefabContext GeneratedPrefabContext { get; }` |


## 主要方法

### Initialize

```csharp
public void Initialize(List<string> assemblyOrder = null)
```

### AddCustomType

```csharp
public void AddCustomType(string name, string path)
```

### GetPrefabNames

```csharp
public IEnumerable<string> GetPrefabNames()
```

### GetWidgetTypes

```csharp
public IEnumerable<string> GetWidgetTypes()
```

### IsBuiltinType

```csharp
public bool IsBuiltinType(string name)
```

### GetBuiltinType

```csharp
public Type GetBuiltinType(string name)
```

### IsCustomType

```csharp
public bool IsCustomType(string typeName)
```

### GetCustomTypePath

```csharp
public string GetCustomTypePath(string name)
```

### CreateBuiltinWidget

```csharp
public Widget CreateBuiltinWidget(UIContext context, string typeName)
```

### GetCustomType

```csharp
public WidgetPrefab GetCustomType(string typeName)
```

### OnUnload

```csharp
public void OnUnload(string typeName)
```

### CheckForUpdates

```csharp
public void CheckForUpdates()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)