<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaPage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaPage

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `EncyclopediaPage` is a class in the `TaleWorlds.CampaignSystem.Encyclopedia` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `HomePageOrderIndex` | `public int HomePageOrderIndex { get; set; }` |
| `Parent` | `public EncyclopediaPage Parent { get; }` |


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)