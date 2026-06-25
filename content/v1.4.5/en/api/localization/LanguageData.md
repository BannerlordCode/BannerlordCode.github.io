---
title: "LanguageData"
description: "Auto-generated class reference for LanguageData."
---
# LanguageData

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `internal class LanguageData`
**Base:** none
**File:** `bin/TaleWorlds.Localization/TaleWorlds.Localization/LanguageData.cs`

## Overview

`LanguageData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `LanguageData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public string Title { get; }` |
| `TextProcessor` | `public string TextProcessor { get; }` |
| `SupportedIsoCodes` | `public string SupportedIsoCodes { get; }` |
| `SubtitleExtension` | `public string SubtitleExtension { get; }` |
| `IsUnderDevelopment` | `public bool IsUnderDevelopment { get; }` |
| `IsValid` | `public bool IsValid { get; }` |

## Key Methods

### InitializeDefault
`public void InitializeDefault(string title, string supportedIsoCodes, string subtitleExtension, string textProcessor, bool isUnderDevelopment)`

**Purpose:** Prepares the resources, state, or bindings required by `default`.

```csharp
// Obtain an instance of LanguageData from the subsystem API first
LanguageData languageData = ...;
languageData.InitializeDefault("example", "example", "example", "example", false);
```

### Clear
`public static void Clear()`

**Purpose:** Removes all content from the current object.

```csharp
// Static call; no instance required
LanguageData.Clear();
```

### GetLanguageData
`public static LanguageData GetLanguageData(string stringId)`

**Purpose:** Reads and returns the `language data` value held by the current object.

```csharp
// Static call; no instance required
LanguageData.GetLanguageData("example");
```

### GetLanguageDataIndex
`public static int GetLanguageDataIndex(string stringId)`

**Purpose:** Reads and returns the `language data index` value held by the current object.

```csharp
// Static call; no instance required
LanguageData.GetLanguageDataIndex("example");
```

### LoadFromXml
`public static void LoadFromXml(XmlDocument doc, string modulePath)`

**Purpose:** Reads `from xml` from persistent storage or a stream.

```csharp
// Static call; no instance required
LanguageData.LoadFromXml(doc, "example");
```

### LoadTestData
`public static void LoadTestData(LanguageData data)`

**Purpose:** Reads `test data` from persistent storage or a stream.

```csharp
// Static call; no instance required
LanguageData.LoadTestData(data);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
LanguageData entry = ...;
```

## See Also

- [Area Index](../)