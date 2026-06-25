---
title: 模块系统详解 / Module System
description: MBSubModuleBase 生命周期、模块加载机制、战役/Mission/ViewModel 注册、SubModule.xml 详解
---
# 模块系统详解 / Module System

> 模块系统回答 mod 的第一个工程问题：**我的代码什么时候被执行？**  答案是：`MBSubModuleBase` 生命周期钩子 + `SubModule.xml` 配置。

**Namespace**: `TaleWorlds.MountAndBlade`  
**Depends On**: `TaleWorlds.ModuleManager`, `TaleWorlds.Core`

---

## ↑ Parent Navigation

- [🏠 首页 / Home](../../)
- [🏗️ 架构总览 / Architecture](./)
- [⭐ SDK 总览](../sdk-overview/)
- [📚 API 目录](../../api/)

## 🔀 Sibling Navigation

| 页面 | 解决什么问题 |
|------|------------|
| [SDK 总览](../sdk-overview/) | 全部模块地图 |
| [存档系统](../save-system/) | 自定义数据如何持久化 |
| [版本差异](../version-delta/) | 不同版本模块差异 |

## ↓ Child / Downstream Links

- 战役入口：[`CampaignBehaviorBase`](../../../../versions/CampaignBehaviorBase/) · [`Campaign`](../../api/campaign/Campaign/)
- 战斗入口：[`MissionBehavior`](../../../../versions/MissionBehavior/) · [`Mission*`](../../../../versions/Mission/)
- UI 入口：[`ViewModel`](../../api/core-extra/ViewModel/) · [`GauntletMovie`](../../api/gui/GauntletMovie/)
- 其他：[`QuestBase*`](../../../../versions/QuestBase/) · [`IssueBase*`](../../../../versions/IssueBase/)

---

## 生命周期的三个阶段

把 `MBSubModuleBase` 的方法分成三组记忆：

1. **启动阶段**（一次）：游戏启动 → `OnSubModuleLoad` → 主菜单出现。
2. **游戏阶段**（每次开始新游戏或读档）：`OnGameStart` → `InitializeGameStarter` → `OnNewGameCreated` / `OnGameLoaded`。
3. **运行时阶段**（每帧）：`OnApplicationTick` → 战斗/战役钩子。

```
游戏启动
   │
   ▼
OnSubModuleLoad()            ← 注册 Harmony、配置文件、全局事件
   │
   ▼
OnBeforeInitialModuleScreenSetAsRoot()  ← 主菜单出现前最后一次干预
   │
   ▼
        主菜单循环
        │
        ▼
OnGameStart(game, starter)   ← 注册 Campaign / Mission Behavior
   │
   ▼
InitializeGameStarter(game, starter)
   │
   ├── OnNewGameCreated()    ← 新游戏初始化
   └── OnGameLoaded()        ← 读档恢复
        │
        ▼
OnApplicationTick(dt)        ← 每帧更新
```

---

## 关键钩子：我该怎么用？

| 钩子 | 典型用途 | 示例 |
|------|---------|------|
| `OnSubModuleLoad` | 加载配置、Harmony patch、注册自定义 XML hotload | 修改游戏全局行为的 mod |
| `OnGameStart` | 获取 `CampaignGameStarter`，注册 `CampaignBehavior` 与 `MissionBehavior` | 战役/任务逻辑 mod |
| `OnNewGameCreated` / `OnGameLoaded` | 在行为注册后做一次性初始化 | 给新建英雄加自定义属性的 mod |
| `OnApplicationTick` | 罕见；尽量用 Behavior 的 `OnHourlyTick` 等替代 | 日志、快捷键轮询 |
| `OnBeforeMissionBehaviorInitialize` | 在 Mission 行为初始化前注入设置 | 自定义战斗规则 |

---

## 注册战役、任务与 ViewModel

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

### 注册 ViewModel（屏幕顶部 HUD/菜单）

Gauntlet UI 通过 `GauntletMovie` + `ViewModel` 加载。通常你不需要在 `MBSubModuleBase` 里注册 ViewModel，而是在 `ScreenBase` 子类或 `OnSubModuleLoad` 里用 `ScreenManager.PushScreen` / `GauntletSystem` 打开。详见 [Gauntlet 指南](../../guide/gauntlet-ui/) 与 [`ViewModel`](../../api/core-extra/ViewModel/)。

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
    <Url value="https://..." />
    <DependedModules>
        <DependedModule Id="Native" />
-                       <DependedModule Id="SandboxCore" Optional="false" />
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
                <Tag key="IsNoRenderModeElement" value="false" />
            </Tags>
        </SubModule>
    </SubModules>
</Module>
```

### 关键字段

| 字段 | 含义 | 调试提示 |
|------|------|----------|
| `Id` / `Name` | 模块唯一标识与显示名 | 模块未显示先检查这两个字段 |
| `DependedModules` | 依赖排序；缺少依赖会导致模块被禁用 | 查看 launcher 日志 |
| `SubModuleClassType` | 继承 `MBSubModuleBase` 的完整类名 | 大小写/命名空间必须完全一致 |
| `DLLName` | 相对 `bin/` 的 DLL 名称 | 确认 DLL 已生成到模块 `bin` 目录 |
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

**调试启动失败**：从 `rgl_log.txt` 查看 `Module`/`ModuleHelper` 相关错误，通常是依赖缺失或 `SubModuleClassType` 不匹配。

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

- [SDK 总览](../sdk-overview/) — 模块地图
- [存档系统](../save-system/) — 行为对象的持久化
- [战役指南](../../guide/campaign-system/) · [任务指南](../../guide/mission-system/) · [Gauntlet 指南](../../guide/gauntlet-ui/)
