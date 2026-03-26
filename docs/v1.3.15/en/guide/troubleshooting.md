---
title: Troubleshooting
description: Common problem diagnosis and solutions
---

# Troubleshooting

## Overview

This guide helps you diagnose and solve common issues in Bannerlord modding.

## Contents

1. [Module Issues](#module-issues)
2. [Game Crashes](#game-crashes)
3. [XML Issues](#xml-issues)
4. [Save Issues](#save-issues)
5. [Performance Issues](#performance-issues)

---

## Module Issues

### Module Not Showing in List

**Symptom**: Module doesn't appear in game's Modules list

**Check**:
1. Does `SubModule.xml` exist and in correct location?
2. Is XML syntax correct (use XML validator)?
3. Is DLL compiled and in correct location?
4. Does class name match `SubModuleClassType` in XML?

```xml
<!-- Correct structure -->
<Module>
  <SubModules>
    <SubModule>
      <DLLName>MyModule.dll</DLLName>
      <SubModuleClassType>MyNamespace.MySubModule</SubModuleClassType>
    </SubModule>
  </SubModules>
</Module>
```

### Module Loading Failed

**Symptom**: Module fails to load on game start

**Check**:
1. Check `rgl_log.txt` for detailed error info
2. Check if dependent modules are loaded
3. Confirm .NET Framework version compatibility

---

## Game Crashes

### Common Crash Causes

| Cause | Symptom | Solution |
|-------|---------|----------|
| Null reference | Crash immediately after operation | Add null checks |
| Array out of bounds | Crash when accessing collection | Check index bounds |
| Type casting | Crash during casting | Use `as` operator |
| Infinite loop | Game hangs then crashes | Review loop logic |

### Debug Methods

```csharp
// Add logging
Debug.Print("Before critical operation");
try
{
    // Potentially crashing code
    SomeOperation();
}
catch (Exception ex)
{
    Debug.Print($"Error: {ex.Message}");
}
Debug.Print("After critical operation");
```

---

## XML Issues

### XML Parse Error

**Symptom**: Game cannot parse XML file

**Solution**:
1. Use XML validator to check syntax
2. Ensure all tags are properly closed
3. Check special character escaping

```xml
<!-- Wrong example -->
<Items>
  <Item name="My Item">  <!-- Spaces might cause issues -->
</Items>

<!-- Correct example -->
<Items>
  <Item name="My_Item" />
</Items>
```

### Resource Path Issues

**Symptom**: Resource fails to load

**Check**:
1. Does path case match?
2. Is resource file in correct location?
3. Is correctly referenced in SubModule.xml?

---

## Save Issues

### Save Corruption

**Symptom**: Cannot load save

**Causes**:
1. Save format version mismatch
2. Custom data types not properly serialized
3. Save format changed after game update

**Solution**:
```csharp
// Add version handling in SyncData
public override void SyncData(IDataStore dataStore)
{
    int version = 1;
    dataStore.SyncData("Version", ref version);
    
    if (version == 1)
    {
        // Load old format
    }
    else if (version == 2)
    {
        // Load new format
    }
}
```

### Custom Data Not Saving

**Check**:
1. Is data class marked with `[SaveableClass]`?
2. Are fields marked with `[SaveableField]`?
3. Does CampaignBehavior properly implement `SyncData`?

---

## Performance Issues

### Stuttering

**Causes**:
1. Creating new objects every frame
2. Heavy calculations on main thread
3. Frequent garbage collection

**Solution**:
```csharp
// Cache objects, avoid creating every frame
private List<Agent> _cachedAgents = new List<Agent>();

public override void OnMissionTick(float dt)
{
    _cachedAgents.Clear();
    // Fill cache
}
```

### Memory Leaks

**Symptom**: Memory usage continuously grows

**Check**:
1. Are event listeners properly unregistered?
2. Are there objects not being released?
3. Is cache growing without limit?

```csharp
public override void OnMissionFinish(bool isHeroParty)
{
    base.OnMissionFinish(isHeroParty);
    
    // Cleanup
    CampaignEvents.OnGameLoaded.RemoveListener(this);
}
```

---

## Log Locations

| Log | Location |
|-----|----------|
| Game log | `Documents\Mount & Blade II Bannerlord\logs\rgl_log.txt` |
| Error log | `Documents\Mount & Blade II Bannerlord\logs\error_log.txt` |

---

## Related Documentation

- [Debugging Tips](./index.md#debugging-tips)
- [Save System](./save-system-guide.md)
- [Common Patterns](./common-patterns.md)

---

## Next Section

- [Common Patterns](./common-patterns.md) - Best practices
- [Getting Started Guide](./index.md) - Return to main guide
