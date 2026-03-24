# Module / Module

**Namespace**: TaleWorlds.MountAndBlade
**File**: `bannerlord-1.3.0/TaleWorlds.MountAndBlade/Module.cs`
**Version**: v1.3.0

## 概述 / Overview

`Module` 是游戏的主模块类，负责管理所有子模组、游戏状态和平台服务。它是一个单例类，通过 `Module.Current` 访问。

`Module` is the main module class of the game, responsible for managing all submodules, game states, and platform services. It is a singleton class accessed via `Module.Current`.

## 与 v1.3.15 的差异 / Differences from v1.3.15

- v1.3.0 的 Module 类结构相对简洁
- v1.3.0 Module class is relatively simpler in structure
- 没有 TaleWorlds.SaveSystem 的独立模块，保存功能通过 TaleWorlds.SaveSystem 命名空间内联实现
- No separate TaleWorlds.SaveSystem module, save functionality is inline within TaleWorlds.SaveSystem namespace
- 没有 TaleWorlds.DotNet 独立模块，DotNet 类型直接在 TaleWorlds.DotNet 命名空间
- No separate TaleWorlds.DotNet module, DotNet types are directly in TaleWorlds.DotNet namespace
- 更少的平台服务集成（缺少一些 v1.3.15 中新增的服务）
- Fewer platform service integrations (missing some services added in v1.3.15)
- 文件大小较小（约 1600 行 vs v1.3.15 的更多行数）
- Smaller file size (about 1600 lines vs more in v1.3.15)

## 关键属性 / Key Properties

| Property | Type | Description |
|----------|------|-------------|
| CurrentModule | static Module | 获取当前模块实例 / Gets current module instance |
| GlobalGameStateManager | GameStateManager | 全局游戏状态管理器 / Global game state manager |
| GlobalTextManager | GameTextManager | 全局文本管理器 / Global text manager |
| MultiplayerRequested | bool | 是否请求多人游戏 / Whether multiplayer is requested |
| LoadingFinished | bool | 加载是否完成 / Whether loading is finished |
| JobManager | JobManager | 作业管理器 / Job manager |

## 关键方法 / Key Methods

| Method | Description |
|--------|-------------|
| CollectSubModules | 收集所有子模组 / Collects all submodules |
| GetSubModuleType | 获取指定名称的子模组类型 / Gets submodule type by name |
| SetInitialModuleScreenAsRootScreen | 设置初始界面为根界面 / Sets initial screen as root |
| OnApplicationTick | 应用层每帧Tick / Application tick every frame |
| GetMissionControllerClassNames | 获取任务控制器类名 / Gets mission controller class names |

## 代码示例 / Code Example

```csharp
// Access the current module
Module module = Module.CurrentModule;

// Get all loaded submodules
MBReadOnlyList<MBSubModuleBase> subModules = module.CollectSubModules();

// Check if multiplayer is requested
if (module.MultiplayerRequested)
{
    // Handle multiplayer mode
}

// Access global game state manager
GameStateManager gameStateManager = module.GlobalGameStateManager;
```

## 注意事项 / Notes

- Module 是单例，通过 Module.CurrentModule 访问
- Module is a singleton, accessed via Module.CurrentModule
- 不要直接实例化 Module，应该使用现有实例
- Do not instantiate Module directly, use the existing instance
- 平台服务初始化在 Initialize() 方法中进行
- Platform services initialization happens in Initialize() method
