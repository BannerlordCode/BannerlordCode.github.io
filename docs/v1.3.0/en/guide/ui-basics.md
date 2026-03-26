---
title: UI System Basics
description: v1.3.0 GauntletMovie introduction
---

# UI System Basics

**v1.3.0 Version**

> Note: This page covers v1.3.0 UI system basics. v1.3.15 has enhanced Gauntlet UI. For complete content, see [v1.3.15 Gauntlet UI](../../v1.3.15/en/guide/gauntlet-ui.md).

## Overview

v1.3.0's Gauntlet UI system can already create custom interfaces.

## GauntletMovie

### Basic Structure

```csharp
using TaleWorlds.MountAndBlade.Gauntlet;

namespace MyModule.UI
{
    public class MyMovie : GauntletMovie
    {
        public override void OnCreate()
        {
            base.OnCreate();
            LoadMovie("MyUI");
        }
    }
}
```

### Lifecycle

- `OnCreate()` - On creation
- `OnInvisible()` - When invisible
- `OnVisible()` - When visible

## Differences from v1.3.15

| Feature | v1.3.0 | v1.3.15 |
|---------|--------|---------|
| GauntletMovie | Supported | Supported |
| ViewModel | Supported | Enhanced binding |
| ScreenManager | Supported | Supported |

---

## Related Documentation

- [v1.3.15 Gauntlet UI](../../v1.3.15/en/guide/gauntlet-ui.md)
- [API Reference](../../api/gui/)
