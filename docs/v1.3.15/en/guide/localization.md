---
title: Localization
description: Multi-language support with MBTextManager
---

# Localization

**Namespace**: TaleWorlds.Localization
**Key Classes**: `MBTextManager`, `TextObject`, `LanguageData`

## Overview

Bannerlord supports multiple languages through `MBTextManager` and language files. Learn how to add multi-language support for your mods.

## Contents

1. [Language Files](#language-files)
2. [MBTextManager Usage](#mbtextmanager-usage)
3. [TextObject](#textobject)
4. [Runtime Language Switching](#runtime-language-switching)

---

## Language Files

### File Format

Language files are located in `ModuleData/lang/`, using `strings.txt` format:

```
# Comment
mod_name=My Mod Name
mod_description=This is my mod description
my_button=Click Me
```

### Multi-Language Support

```
# Chinese (zh)
mod_name=我的Mod

# English (en)  
mod_name=My Mod

# French (fr)
mod_name=Mon Mod
```

---

## MBTextManager Usage

### Get Localized Text

```csharp
using TaleWorlds.Localization;

// Get text
string text = MBTextManager.GetText("mod_name");

// Use TextObject
TextObject textObj = MBTextManager.GetTextObject("mod_description");
```

### Set Text

```csharp
// Set text directly
MBTextManager.SetText("my_key", "my_value");

// Use TextObject
TextObject obj = new TextObject("{=my_key}My Value");
MBTextManager.SetText("my_key", obj);
```

### Format Text

```csharp
// Text with parameters
// strings.txt: greeting=Hello, {NAME}!
string greeting = MBTextManager.GetText("greeting");
greeting = greeting.Replace("{NAME}", "Player");

// Use TextObject for formatting
TextObject template = new TextObject("{=greeting}Hello, {NAME}!");
template.SetTextVariable("NAME", "Player");
string result = template.ToString();
```

---

## TextObject

### Basic Usage

```csharp
using TaleWorlds.Localization;

// Create TextObject
TextObject text = new TextObject("{=hello}Hello, World!");
string str = text.ToString();

// With variables
TextObject textWithVar = new TextObject("{=greeting}Hello, {NAME}!");
textWithVar.SetTextVariable("NAME", "Player");
```

### Conditional Text

```csharp
// Use TextObject for conditional display
TextObject conditionText = new TextObject();
conditionText.SetTextVariable("COUNT", 5);
conditionText.SetTextVariable("ZERO_TEXT", "No items");
conditionText.SetTextVariable("PLURAL_TEXT", "Have {COUNT} items");
conditionText.SetTextVariable("SINGLE_TEXT", "Have 1 item");
// Need to select appropriate text in game based on COUNT value
```

---

## Runtime Language Switching

```csharp
// Get current language
string currentLanguage = LocalizationManager.LanguageCode;

// Get available languages
List<LanguageData> availableLanguages = LocalizedTextManager.GetLanguages();

// Switch language
LocalizedTextManager.SetLanguage(newLanguageCode);
```

---

## Related API

- [MBTextManager API](../api/localization/MBTextManager.md)
- [TextObject API](../api/localization/TextObject.md)
- [LanguageData API](../api/localization/LanguageData.md)

---

## Next Section

- [Common Patterns](./common-patterns.md) - Best practices
- [Game Systems Overview](./game-systems-overview.md) - Learn what can be customized
