---
title: Common Issues
description: v1.3.0 common errors and solutions
---

# Common Issues

**v1.3.0 Version**

## Module Issues

### Module Not Loading

Check:
1. Is `SubModule.xml` path correct?
2. Is DLL compiled?
3. Does class name match?

### Class Not Found

```xml
<!-- Confirm correct class name -->
<SubModuleClassType>MyNamespace.MySubModule</SubModuleClassType>
```

## Save Issues

### Data Not Saving

Check:
1. Is `SyncData` implemented?
2. Is variable a field (not property)?
3. Is variable type supported?

```csharp
// Correct
private int _value;
public override void SyncData(IDataStore dataStore)
{
    dataStore.SyncData("Value", ref _value);
}

// Wrong - properties are not saved
public int Value { get; set; }
```

## Version Difference Issues

### Upgrading to v1.3.15

v1.3.0 code may need modification for v1.3.15:
1. Save system needs re-implementation
2. Some APIs marked [Obsolete]

---

## Related Documentation

- [Version Differences](./index.md#version-differences)
- [v1.3.15 Troubleshooting](../../v1.3.15/en/guide/troubleshooting.md)
