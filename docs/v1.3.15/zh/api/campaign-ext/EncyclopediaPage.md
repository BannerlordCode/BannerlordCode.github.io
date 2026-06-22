<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncyclopediaPage`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaPage

**命名空间:** TaleWorlds.CampaignSystem.Encyclopedia
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`EncyclopediaPage` 是 `TaleWorlds.CampaignSystem.Encyclopedia` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `HomePageOrderIndex` | `public int HomePageOrderIndex { get; set; }` |
| `Parent` | `public EncyclopediaPage Parent { get; }` |


## 主要方法

### IsRelevant

```csharp
public virtual bool IsRelevant()
```

### HasIdentifierType

```csharp
public bool HasIdentifierType(Type identifierType)
```

### GetIdentifier

```csharp
public string GetIdentifier(Type identifierType)
```

### GetIdentifierNames

```csharp
public string GetIdentifierNames()
```

### IsFiltered

```csharp
public bool IsFiltered(object o)
```

### GetViewFullyQualifiedName

```csharp
public virtual string GetViewFullyQualifiedName()
```

### GetStringID

```csharp
public virtual string GetStringID()
```

### GetName

```csharp
public virtual TextObject GetName()
```

### GetObject

```csharp
public virtual MBObjectBase GetObject(string typeName, string stringID)
```

### IsValidEncyclopediaItem

```csharp
public virtual bool IsValidEncyclopediaItem(object o)
```

### GetDescriptionText

```csharp
public virtual TextObject GetDescriptionText()
```

### GetListItems

```csharp
public IEnumerable<EncyclopediaListItem> GetListItems()
```

### GetFilterItems

```csharp
public IEnumerable<EncyclopediaFilterGroup> GetFilterItems()
```

### GetSortControllers

```csharp
public IEnumerable<EncyclopediaSortController> GetSortControllers()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)