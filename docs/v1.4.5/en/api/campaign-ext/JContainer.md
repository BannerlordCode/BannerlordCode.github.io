<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JContainer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JContainer

**Namespace:** Newtonsoft.Json.Linq
**Module:** Newtonsoft.Json
**Type:** `public abstract class JContainer : JToken, IList<JToken>, ICollection<JToken>, IEnumerable<JToken>, IEnumerable, ITypedList, IBindingList, ICollection, IList, INotifyCollectionChanged`
**Base:** `JToken`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Linq/JContainer.cs`

## Overview

`JContainer` lives in `Newtonsoft.Json.Linq` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json.Linq` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `First` | `public override JToken? First { get; }` |
| `Last` | `public override JToken? Last { get; }` |
| `ListChanged` | `public event ListChangedEventHandler ListChanged { get; }` |
| `AddingNew` | `public event AddingNewEventHandler AddingNew { get; }` |
| `CollectionChanged` | `public event NotifyCollectionChangedEventHandler CollectionChanged { get; }` |

## Key Methods

### Children
`public override JEnumerable<JToken> Children()`

**Purpose:** Handles logic related to `children`.

### Descendants
`public IEnumerable<JToken> Descendants()`

**Purpose:** Handles logic related to `descendants`.

### DescendantsAndSelf
`public IEnumerable<JToken> DescendantsAndSelf()`

**Purpose:** Handles logic related to `descendants and self`.

### Add
`public virtual void Add(object? content)`

**Purpose:** Adds `add` to the current collection or state.

### AddFirst
`public void AddFirst(object? content)`

**Purpose:** Adds `first` to the current collection or state.

### CreateWriter
`public JsonWriter CreateWriter()`

**Purpose:** Creates a new `writer` instance or object.

### ReplaceAll
`public void ReplaceAll(object content)`

**Purpose:** Handles logic related to `replace all`.

### RemoveAll
`public void RemoveAll()`

**Purpose:** Removes `all` from the current collection or state.

### Merge
`public void Merge(object content)`

**Purpose:** Handles logic related to `merge`.

### Merge
`public void Merge(object content, JsonMergeSettings? settings)`

**Purpose:** Handles logic related to `merge`.

## Usage Example

```csharp
var implementation = new CustomJContainer();
```

## See Also

- [Complete Class Catalog](../catalog)