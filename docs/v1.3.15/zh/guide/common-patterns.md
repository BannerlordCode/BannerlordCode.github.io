---
title: 常见模式 / Common Patterns
description: Bannerlord modding 最佳实践 / Bannerlord modding best practices
---

# 常见模式 / Common Patterns

**Namespace**: All TaleWorlds.*

## 概述 / Overview

本指南介绍 Bannerlord modding 的最佳实践和常见模式。遵循这些模式可以让你的 Mod 更稳定、更易维护。

This guide covers best practices and common patterns for Bannerlord modding. Following these patterns makes your mods more stable and maintainable.

## 目录 / Contents

1. [代码组织](#代码组织)
2. [性能优化](#性能优化)
3. [兼容性](#兼容性)
4. [调试技巧](#调试技巧)

---

## 代码组织

### 目录结构

```
MyModule/
├── CSharpScripts/
│   ├── MySubModule.cs
│   ├── Missions/
│   │   ├── MyMissionLogic.cs
│   │   └── MyAgentHandler.cs
│   ├── Campaign/
│   │   ├── MyCampaignBehavior.cs
│   │   └── MyData.cs
│   └── UI/
│       ├── MyScreen.cs
│       └── MyViewModel.cs
├── ModuleData/
│   ├── lang/
│   │   ├── strings_en.txt
│   │   └── strings_zh.txt
│   ├── items.xml
│   └── characters.xml
└── SubModule.xml
```

### 命名空间

```csharp
namespace MyModule
{
    namespace Missions { }
    namespace Campaign { }
    namespace UI { }
    namespace Helpers { }
}
```

### 类命名

| 类型 | 前缀 | 示例 |
|------|------|------|
| SubModule | `My` | `MySubModule` |
| MissionBehavior | `MyMission` | `MyMissionLogic` |
| CampaignBehavior | `MyCampaign` | `MyCampaignBehavior` |
| Screen | `My` | `MyScreen` |
| ViewModel | `My` | `MyViewModel` |

---

## 性能优化

### 缓存常用对象

```csharp
// 避免每帧获取
private Agent _cachedPlayerAgent;

public override void OnMissionStart()
{
    _cachedPlayerAgent = Mission.Current.PlayerTeam?.Leader;
}

public override void OnMissionTick(float dt)
{
    // 使用缓存，而不是每帧获取
    if (_cachedPlayerAgent != null)
    {
        // ...
    }
}
```

### 避免每帧分配

```csharp
// 避免
public override void OnMissionTick(float dt)
{
    var list = new List<string>();  // 每帧分配！
}

// 推荐
private List<string> _reusableList = new List<string>();

public override void OnMissionTick(float dt)
{
    _reusableList.Clear();  // 重用
}
```

### 使用 MBList 代替 List

```csharp
// TaleWorlds 优化的列表类型
using TaleWorlds.Library;

// 使用 MBList 而非 List
MBList<Agent> agents = new MBList<Agent>();
```

---

## 兼容性

### 检查游戏版本

```csharp
// 检查游戏版本
ApplicationVersion gameVersion = Game.Current.GameVersion;

if (gameVersion >= ApplicationVersion.FromString("e1.3.15"))
{
    // 使用新 API
}
else
{
    // 使用旧 API
}
```

### 检查模块加载

```csharp
// 检查模块是否加载
if (ModuleManager.FindLoadedModules().Any(m => m.Id == "MyModule"))
{
    // 模块已加载
}
```

### 使用 try-catch 处理兼容性

```csharp
try
{
    // 使用新 API
    SomeNewMethod();
}
catch (Exception)
{
    // 回退到旧实现
    SomeOldMethod();
}
```

---

## 调试技巧

### 使用 Debug.Print

```csharp
Debug.Print("Debug message", 0, Debug.DebugColor.Green, 17592186044416UL);
```

### 使用 InformationManager

```csharp
// 屏幕显示
MBInformationManager.AddQuickInformation(
    new InformationMessage("Info text", Debug.Color.Blue)
);

// 弹出窗口
InformationExtension.ShowPopup("Title", "Message");
```

### 查看日志

```
C:\Users\<用户名>\Documents\Mount & Blade II Bannerlord\logs\rgl_log.txt
```

---

## 相关文档 / Related Documentation

- [调试技巧](./index.md#调试技巧)
- [API 参考](../api/)
- [架构文档](../architecture/)

---

## 下一节 / Next Section

- [游戏系统概述](./game-systems-overview.md) - 了解可自定义的内容
- [故障排除](./troubleshooting.md) - 解决问题
