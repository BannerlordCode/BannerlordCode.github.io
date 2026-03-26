---
title: 本地化 / Localization
description: MBTextManager 多语言支持 / Multi-language support with MBTextManager
---

# 本地化 / Localization

**Namespace**: TaleWorlds.Localization
**Key Classes**: `MBTextManager`, `TextObject`, `LanguageData`

## 概述 / Overview

Bannerlord 支持多语言，通过 `MBTextManager` 和语言文件实现。了解如何为 Mod 添加多语言支持。

Bannerlord supports multiple languages through `MBTextManager` and language files. Learn how to add multi-language support for your mods.

## 目录 / Contents

1. [语言文件](#语言文件)
2. [MBTextManager 用法](#mbtextmanager-用法)
3. [TextObject](#textobject)
4. [运行时语言切换](#运行时语言切换)

---

## 语言文件

### 文件格式

语言文件位于 `ModuleData/lang/`，使用 `strings.txt` 格式：

```
# 注释
mod_name=我的Mod名称
mod_description=这是我的Mod描述
my_button=点击我
```

### 多语言支持

```
# 中文 (zh)
mod_name=我的Mod

# 英文 (en)  
mod_name=My Mod

# 法文 (fr)
mod_name=Mon Mod
```

---

## MBTextManager 用法

### 获取本地化文本

```csharp
using TaleWorlds.Localization;

// 获取文本
string text = MBTextManager.GetText("mod_name");

// 使用 TextObject
TextObject textObj = MBTextManager.GetTextObject("mod_description");
```

### 设置文本

```csharp
// 直接设置文本
MBTextManager.SetText("my_key", "my_value");

// 使用 TextObject
TextObject obj = new TextObject("{=my_key}My Value");
MBTextManager.SetText("my_key", obj);
```

### 格式化文本

```csharp
// 带参数的文本
// strings.txt: greeting=你好，{NAME}！
string greeting = MBTextManager.GetText("greeting");
greeting = greeting.Replace("{NAME}", "玩家");

// 使用 TextObject 格式化
TextObject template = new TextObject("{=greeting}你好，{NAME}！");
template.SetTextVariable("NAME", "玩家");
string result = template.ToString();
```

---

## TextObject

### 基本用法

```csharp
using TaleWorlds.Localization;

// 创建 TextObject
TextObject text = new TextObject("{=hello}Hello, World!");
string str = text.ToString();

// 带变量
TextObject textWithVar = new TextObject("{=greeting}Hello, {NAME}!");
textWithVar.SetTextVariable("NAME", "Player");
```

### 条件文本

```csharp
// 使用 TextObject 进行条件显示
TextObject conditionText = new TextObject();
conditionText.SetTextVariable("COUNT", 5);
conditionText.SetTextVariable("ZERO_TEXT", "没有物品");
conditionText.SetTextVariable("PLURAL_TEXT", "有 {COUNT} 个物品");
conditionText.SetTextVariable("SINGLE_TEXT", "有 1 个物品");
// 需要根据 COUNT 值在游戏中选择合适的文本
```

---

## 运行时语言切换

```csharp
// 获取当前语言
string currentLanguage = LocalizationManager.LanguageCode;

// 获取可用语言
List<LanguageData> availableLanguages = LocalizedTextManager.GetLanguages();

// 切换语言
LocalizedTextManager.SetLanguage(newLanguageCode);
```

---

## 相关 API / Related API

- [MBTextManager API](../api/localization/MBTextManager.md)
- [TextObject API](../api/localization/TextObject.md)
- [LanguageData API](../api/localization/LanguageData.md)

---

## 下一节 / Next Section

- [常见模式](./common-patterns.md) - 最佳实践
- [游戏系统概述](./game-systems-overview.md) - 了解可自定义的内容
