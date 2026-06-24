<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TutorialAttribute`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TutorialAttribute

**Namespace:** SandBox.GauntletUI.Tutorial
**Module:** SandBox.GauntletUI
**Type:** `public class TutorialAttribute : Attribute`
**Base:** `Attribute`
**File:** `SandBox.GauntletUI/Tutorial/TutorialAttribute.cs`

## Overview

`TutorialAttribute` is a .NET attribute used to tag a type or member so runtime code or tooling can recognize it by convention.

## Mental Model

Treat `TutorialAttribute` as a Attribute-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
[TutorialAttribute]
public class Example { }
```

## See Also

- [Complete Class Catalog](../catalog)