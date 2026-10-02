---
title: "MetaDataExtensions"
description: "两个存档元数据扩展方法：一个回答「这个存档是不是主线战役」，一个回答「成就是否被禁用」。"
---
# MetaDataExtensions

**Namespace:** StoryMode.Extensions
**Module:** StoryMode
**Type:** `public static class MetaDataExtensions`
**Base:** `System.Object`（纯静态类）
**Source:** `bannerlord-1.5.3/StoryMode/Extensions/MetaDataExtensions.cs`

## 概述

存档文件头里有一段 `MetaData`——一个扁平的 `string → string` 字典，序列化后是一个 JSON 对象。`HasStoryMode()` 从里面读 `"Modules"` 键，判断这次加载的存档是不是主线战役战役；`AreAchievementsDisabled()` 读 `"AchievementsDisabled"` 键。两者都是纯读取，不改存档。

## 心智模型

`HasStoryMode()` 的真实使用点只有一个，但它决定了整个模块的生死——`StoryMode.View` 里的 `StoryModeViewSubModule.OnBeforeGameStart`：

```csharp
SandBoxGameManager gm = mbGameManager as SandBoxGameManager;
if (gm != null && (gm.LoadingSavedGame ? !gm.MetaData.HasStoryMode() : !this._startedStoryMode))
{
    disabledModules.Add("StoryMode");
}
```

语义分两支：**读档**时看元数据里有没有 `StoryMode` 模块；**开新局**时看自己有没有走过「New Campaign」入口（`_startedStoryMode` 标志）。任一不满足就把 `StoryMode` 加进 `disabledModules`——也就是**加载时直接禁用整个主线模块**。

为什么必须有这道关：主线模块注册了大量模型覆盖和 behavior，这些东西假设战役状态里有 `MainStoryLine` 阶段对象。往沙盒战役里加载主线模块会让 `StoryModeManager.Current` 在应该存在的地方变成 null，进而 NRE。

`HasStoryMode()` 的解析规则：

```text
metaData.TryGetValue("Modules", out text)
  → text.Split(';')
  → 逐段 string.Equals(段, "StoryMode", OrdinalIgnoreCase)
```

**用分号分隔、忽略大小写**。所以元数据里 `"StoryMode;SandBox"`、`"SandBox;StoryMode"`、`"sToRyMoDe"` 都能命中。

**坑**：

1. **`AreAchievementsDisabled()` 在本版本里没有任何调用方**（全仓只出现在它自己的定义文件里）。它是一个为其它模块/未来准备的读取口。别假设用它就能关掉成就——**没有代码读它就等于没有**。
2. **`HasStoryMode()` 只证明「存档的模块列表里有 StoryMode」，不证明战役真的跑完了主线**。有人工改过元数据、或 mod 改写了 `"Modules"` 值时，它会说谎。
3. **`metaData` 为 null 时两个方法都安全返回 false**（`HasStoryMode` 判了 null，`AreAchievementsDisabled` 靠 `metaData != null &&` 短路）。
4. **两个方法都只读不写**：想在 mod 里标记自己的存档状态，`MetaData` 有 `Add(key, value)` 和索引器 setter，但那是 `TaleWorlds.SaveSystem` 的 API，不在本类。
5. **`TryGetValue` 不是索引器**：`MetaData` 两者都有（本类的代码用的是 `TryGetValue`），但索引器在缺键时返回 null 而 `TryGetValue` 返回 false。用错会得到 null 参与后续比较。

## 主要成员

- `public static bool HasStoryMode(this MetaData metaData)`：读 `"Modules"`，按 `;` 切分后逐段做 `OrdinalIgnoreCase` 比较。`metaData` 为 null 或键不存在 → false。
- `public static bool AreAchievementsDisabled(this MetaData metaData)`：读 `"AchievementsDisabled"`，要求能 `int.TryParse` 成功且**值恰为 1**。写 `"true"` 或 `"2"` 都返回 false。**本版本无调用方。**

本类**没有**其它字段、常量或属性。

## 使用示例

```csharp
using StoryMode.Extensions;

// 1) 最典型的用法：决定要不要加载主线模块（StoryModeViewSubModule.OnBeforeGameStart）
SandBoxGameManager gm = mbGameManager as SandBoxGameManager;
if (gm != null)
{
    bool isStoryModeSave = gm.LoadingSavedGame ? gm.MetaData.HasStoryMode() : this._startedStoryMode;
    if (!isStoryModeSave)
    {
        disabledModules.Add("StoryMode");
    }
}

// 2) 自己的模块做同样的判断：沙盒战役里就别碰主线状态
public override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    base.InitializeGameStarter(game, gameStarterObject);
    SandBoxGameManager gm = game.GameType as SandBoxGameManager;
    if (gm != null && gm.MetaData != null && !gm.MetaData.HasStoryMode())
    {
        return;   // 不是主线存档，别注册主线相关 behavior
    }
    ((CampaignGameStarter)gameStarterObject).AddBehavior(new MyStoryModeBehavior());
}

// 3) 直接读原始键（要拿到别的模块标记时）
string modules;
if (gm.MetaData != null && gm.MetaData.TryGetValue("Modules", out modules))
{
    Debug.Print("存档模块列表：" + modules);   // 形如 "StoryMode;SandBox"
}
```

## 风险与边界

- **`AreAchievementsDisabled` 是死代码**：全仓无调用方。用它做「禁用成就」开关是无效的。
- **值必须是整数 1**：`"true"`、`"yes"`、`"2"` 都返回 false。想兼容别的写法得自己加解析。
- **只认 `StoryMode` 一个模块名**：`"StoryMode2"`、`"StoryModeView"` 都不命中（因为是整段精确比较，不是前缀匹配）。要判断主线视图模块得写自己的扩展。
- **元数据可被篡改**：玩家或 mod 能改存档头。`HasStoryMode()` 返回 true 不保证战役状态自洽。
- **`MetaData` 序列化是 JSON**：键值对是扁平的，二进制外层只包了长度前缀。自己往里塞复杂值（比如带分号）会破坏 `HasStoryMode()` 的切分。
- **命名空间嵌套**：`StoryMode.Extensions` 与 `StoryMode.StoryModeObjects` 同级，using 时别漏。

## 依赖关系

- [CampaignStoryMode](../CampaignStoryMode) — `HasStoryMode()` 为 true 才应该存在的主线战役类型
- [StoryModeManager](../StoryModeManager) — 主线战役才有的状态根，`HasStoryMode()` 实质是在提前判它存不存在
- [StoryModeSubModule](../StoryModeSubModule) — 被 `disabledModules.Add("StoryMode")` 禁用的目标模块之一