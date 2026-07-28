---
title: 模块系统详解 / Module System
description: MBSubModuleBase 生命周期、模块加载顺序、战役与 Mission Behavior 注册、SubModule.xml 详解（v1.3.0）。
---
# 模块系统详解 / Module System

> 模块系统回答每个 mod 的第一个工程问题：**我的代码什么时候被执行？** 在 Bannerlord v1.3.0 中，答案仍然是 `MBSubModuleBase` 生命周期钩子加上 `SubModule.xml` 配置。

**命名空间**: `TaleWorlds.MountAndBlade`  
**依赖**: `TaleWorlds.ModuleManager`, `TaleWorlds.Core`

---

## 上级导航

- [首页 / Home](../../)
- [架构总览 / Architecture](./)
- [SDK 总览 / SDK Overview](../sdk-overview/)
- [API 目录 / API Catalog](../../api/)

## 同级导航

| 页面 | 解决什么问题 |
|------|------------|
| [SDK 总览](../sdk-overview/) | 全部模块地图 |
| [存档系统](../save-system/) | 自定义数据持久化 |
| [版本差异](../version-delta/) | 后续版本改了什么 |
| [原生互操作](../native-interop/) | 如何调用 TaleWorlds.Native.dll |

## 下游链接

- 战役入口：[`CampaignBehaviorBase`](../../../../versions/CampaignBehaviorBase/) · [`Campaign`](../../api/campaign/Campaign/)
- 战斗入口：[`MissionBehavior`](../../../../versions/MissionBehavior/) · [`Mission`](../../../../versions/Mission/)
- UI 入口：[`ViewModel`](../../api/core-extra/ViewModel/) · [`GauntletMovie`](../../api/gui/GauntletMovie/)
- 任务/事件：[`QuestBase`](../../../../versions/QuestBase/) · [`IssueBase`](../../../../versions/IssueBase/)

---

## 生命周期的三个阶段

把 `MBSubModuleBase` 的方法分成三组来记：

1. **启动阶段**（每次游戏启动一次）：游戏启动 → `OnSubModuleLoad` → 主菜单出现。
2. **游戏阶段**（每次开新档或读档）：`OnGameStart` → `InitializeGameStarter` → `OnNewGameCreated` / `OnGameLoaded`。
3. **运行时阶段**（每帧）：`OnApplicationTick` 以及战斗/战役钩子。

```
游戏启动
    │
    ▼
OnSubModuleLoad()                         ← 注册 Harmony、配置文件、全局事件
    │
    ▼
OnBeforeInitialModuleScreenSetAsRoot()    ← 主菜单出现前最后一次干预
    │
    ▼
        主菜单循环
        │
        ▼
OnGameStart(game, starter)                ← 注册战役 / Mission Behavior
    │
    ▼
InitializeGameStarter(game, starter)
    │
    ├── OnNewGameCreated()                ← 新游戏初始化
    └── OnGameLoaded()                    ← 读档恢复
        │
        ▼
OnApplicationTick(dt)                     ← 每帧更新
```

---

## 关键钩子速查

| 钩子 | 典型用途 | 示例 |
|------|---------|------|
| `OnSubModuleLoad` | 加载配置、Harmony patch、注册自定义 XML hotload | 修改全局行为的 mod |
| `OnGameStart` | 拿到 `CampaignGameStarter`，注册 Campaign/Mission Behavior | 战役/战斗逻辑 mod |
| `OnNewGameCreated` / `OnGameLoaded` | 行为注册后的一次性初始化 | 给新建英雄加自定义属性 |
| `OnApplicationTick` | 尽量少用；优先用 Behavior tick | 日志、快捷键轮询 |
| `OnBeforeMissionBehaviorInitialize` | 在 Mission 行为初始化前注入设置 | 自定义战斗规则 |

---

## 注册战役、战斗与 ViewModel

### 注册 CampaignBehavior

```csharp
protected override void OnGameStart(Game game, IGameStarter starter)
{
    base.OnGameStart(game, starter);
    if (starter is CampaignGameStarter campaignStarter)
    {
        campaignStarter.AddBehavior(new MyCampaignBehavior());
    }
}
```

入口类：[`CampaignBehaviorBase`](../../../../versions/CampaignBehaviorBase/)。

### 注册 MissionBehavior

```csharp
public override void OnMissionBehaviorInitialize(Mission mission)
{
    base.OnMissionBehaviorInitialize(mission);
    mission.AddMissionBehavior(new MyMissionBehavior());
}
```

入口类：[`MissionBehavior`](../../../../versions/MissionBehavior/)。

### 注册 ViewModel（HUD / 菜单）

Gauntlet UI 通过 `GauntletMovie` + `ViewModel` 加载。通常你不需要在 `MBSubModuleBase` 里注册 ViewModel，而是在 `ScreenBase` 子类或 `OnSubModuleLoad` 里用 `ScreenManager.PushScreen` / `GauntletSystem` 打开。详见 [Gauntlet UI 指南](../../../../v1.3.15/zh/guide/gauntlet-ui/) 与 [`ViewModel`](../../api/core-extra/ViewModel/)。

---

## SubModule.xml — mod 的身份证

```xml
<?xml version="1.0" encoding="utf-8"?>
<Module>
    <Name value="MyMod" />
    <Id value="MyMod" />
    <Version value="v1.0.0" />
    <DefaultModule value="true" />
    <SingleplayerModule value="true" />
    <MultiplayerModule value="false" />
    <DependedModules>
        <DependedModule Id="Native" Optional="false" />
        <DependedModule Id="SandboxCore" Optional="false" />
    </DependedModules>
    <SubModules>
        <SubModule>
            <Name value="MyMod" />
            <DLLName value="MyMod.dll" />
            <SubModuleClassType value="MyMod.MySubModule" />
            <Assemblies>
                <Assembly value="MyMod.dll" />
            </Assemblies>
            <Tags>
                <Tag key="DedicatedServerType" value="none" />
            </Tags>
        </SubModule>
    </SubModules>
</Module>
```

### 关键字段

| 字段 | 含义 | 调试提示 |
|------|------|----------|
| `Id` / `Name` | 模块唯一标识与显示名 | 模块没出现先检查这两个字段 |
| `DependedModules` | 依赖排序；缺少依赖会导致模块被禁用 | 查看 launcher 日志 |
| `SubModuleClassType` | 继承 `MBSubModuleBase` 的完整类名 | 大小写和命名空间必须完全一致 |
| `DLLName` | 相对模块 `bin/` 目录的 DLL 名称 | 确认 DLL 已生成到模块 `bin` 目录 |
| `Tags` | 平台/模式过滤 | 错误的 ExclusivePlatform 会导致 DLL 不加载 |

---

## 加载流程

```
Module.Initialize()
    ├── ModuleHelper.InitializeModules()   ← 解析所有 SubModule.xml
    ├── LoadSubModules()                   ← 按拓扑排序加载 DLL
    │       └── 创建 MBSubModuleBase 实例
    ├── FindMissions()
    └── SaveManager.InitializeGlobalDefinitionContext()
    │
    ▼
SetInitialModuleScreenAsRoot()
    └── 调用 OnBeforeInitialModuleScreenSetAsRoot()
```

**启动失败排错**：从 `rgl_log.txt` 查看 `Module`/`ModuleHelper` 相关错误，通常是依赖缺失或 `SubModuleClassType` 不匹配。

---

## 关键类速查

| 类 | 职责 | 高频场景 |
|----|------|----------|
| `MBSubModuleBase` | mod 生命周期入口 | 写任何 mod 的第一步 |
| `Module` | 中央协调器 | 排查启动失败 |
| `ModuleHelper` | 模块查找、拓扑排序 | 了解加载顺序 |
| `ModuleInfo` | 单个模块元数据 | 运行时读取依赖 |
| `CampaignGameStarter` | 战役启动器 | 注册 `CampaignBehaviorBase` |
| `CampaignBehaviorBase` | 战役每日逻辑 | [跨版本页](../../../../versions/CampaignBehaviorBase/) |
| `MissionBehavior` | 战斗逻辑 | [跨版本页](../../../../versions/MissionBehavior/) |
| `ViewModel` | UI 数据绑定 | [API 目录](../../api/viewmodel/) |

---

## 参见

- [SDK 总览](../sdk-overview/) — v1.3.0 完整模块地图
- [存档系统](../save-system/) — Behavior 对象的持久化
- [版本差异](../version-delta/) — v1.3.15 与 v1.4.5 的变化
- [战役指南](../../../../v1.3.15/zh/guide/campaign-system/) · [任务指南](../../../../v1.3.15/zh/guide/mission-system/) · [Gauntlet 指南](../../../../v1.3.15/zh/guide/gauntlet-ui/)
