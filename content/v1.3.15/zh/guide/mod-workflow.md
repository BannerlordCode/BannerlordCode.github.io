---
title: Mod 开发工作流
description: 从环境配置、模块加载到发布的可重复 Bannerlord Mod 开发流程。
---
# Mod 开发工作流

这页把“写出一个能加载的 Bannerlord Mod”拆成可以重复执行的步骤：先准备引用和模块目录，再接入 `MBSubModuleBase`，最后用日志和游戏内验证确认行为真的运行。它适合已经读过[入门指南](../)并准备开始实际项目的开发者。

## 心智模型

一个 Mod 不是单独的 DLL，而是由 `SubModule.xml` 声明、游戏按模块生命周期加载的目录。XML 决定模块身份、依赖和资源入口；`MBSubModuleBase` 决定 C# 代码从哪里进入；`CampaignBehaviorBase` 和 `MissionBehavior` 分别把逻辑绑定到战役和单场战斗。任何一层不匹配，都会表现为“模块不显示”“行为没有触发”或启动阶段崩溃。

不要把所有逻辑都放进 `OnSubModuleLoad`。它适合模块级初始化；战役行为应在 `OnGameStart` 的 `CampaignGameStarter` 中注册，任务行为应在 `OnMissionBehaviorInitialize` 中加入当前 `Mission`。需要跨存档的数据还必须经过 SaveSystem 的字段契约，不能只依赖内存字段。

---

## 环境配置

### 推荐工具

| 工具 | 用途 | 注意 |
|------|------|------|
| Visual Studio 2022 Community | C# 工程、调试、程序集引用 | 安装 `.NET desktop development` 工作负载 |
| VS Code + C# Dev Kit | 轻量替代方案 | 需要手动配置 MSBuild 和游戏引用 |
| .NET Framework 4.7.2 / 4.8 | 运行时目标 | 与游戏使用的运行时保持一致 |
| Bannerlord Launcher / BLSE | 加载和测试 Mod | BLSE 可以绕过官方启动器进行测试 |

### 配置游戏引用

创建 `Class Library (.NET Framework)` 项目，然后引用游戏目录中的程序集：

```
C:\Program Files (x86)\Steam\steamapps\common\
Mount & Blade II Bannerlord\
  ├── bin\Win64_Shipping_Client\TaleWorlds.*.dll
  └── Modules\Native\bin\Win64_Shipping_Client\TaleWorlds.*.dll
```

常用核心程序集包括：

- `TaleWorlds.Core`
- `TaleWorlds.Library`
- `TaleWorlds.MountAndBlade`
- `TaleWorlds.CampaignSystem`
- `TaleWorlds.Engine`
- `TaleWorlds.SaveSystem`（需要持久化数据时）

将这些引用的 `Copy Local` 设为 `False`，避免把官方 DLL 一起打进你的 Mod。使用 BLSE 时，可以在 Steam 启动参数中加入 `--module MyModule`；否则在官方启动器中启用模块。

## 最小模块目录

游戏要求 `Modules\MyModule\` 使用固定结构。开发测试时，把编译输出复制到这个目录：

```
Mount & Blade II Bannerlord\Modules\MyModule\
├── SubModule.xml                          # 模块清单
├── bin\Win64_Shipping_Client\
│   └── MyModule.dll                       # 你的程序集
├── ModuleData\
│   ├── items.xml                          # 自定义物品，可选
│   └── lang\
│       └── strings_EN.xml                 # 本地化，可选
└── Assets\                                # 网格、纹理、声音，可选
```

一个最小的 `SubModule.xml`：

```xml
<?xml version="1.0" encoding="utf-8"?>
<Module>
  <Name value="MyModule"/>
  <Id value="MyModule"/>
  <Version value="1.0.0"/>
  <DefaultModule>
    <Xmls>
      <XmlNode path="ModuleData/items"/>
    </Xmls>
  </DefaultModule>
  <Dlls>
    <DllInfo>
      <AssemblyFile>MyModule.dll</AssemblyFile>
      <SubModuleClassType>MyModule.MySubModule</SubModuleClassType>
    </DllInfo>
  </Dlls>
</Module>
```

关键字段的边界是：

- `<Id>` 是唯一模块标识，也会影响配置路径和 Vortex 依赖名。
- `<Version>` 应使用语义化版本，方便玩家判断兼容性。
- `<SubModuleClassType>` 必须是和 C# 类完全一致的 `Namespace.ClassName`。
- `<XmlNode>` 路径必须对应 `ModuleData` 下的实际 XML 文件，否则模块可能加载但资源不会注册。

## 第一个 SubModule

```csharp
using TaleWorlds.Core;
using TaleWorlds.Localization;
using TaleWorlds.MountAndBlade;

namespace MyModule
{
    public class MySubModule : MBSubModuleBase
    {
        protected override void OnSubModuleLoad()
        {
            base.OnSubModuleLoad();
            InformationManager.DisplayMessage(
                new InformationMessage("MyModule loaded"));
        }

        protected override void OnGameStart(Game game, IGameStarter gameStarter)
        {
            base.OnGameStart(game, gameStarter);
            if (gameStarter is CampaignGameStarter campaignStarter)
            {
                campaignStarter.AddBehavior(new MyCampaignBehavior());
            }
        }

        public override void OnMissionBehaviorInitialize(Mission mission)
        {
            base.OnMissionBehaviorInitialize(mission);
            mission.AddMissionBehavior(new MyMissionBehavior());
        }
    }
}
```

`OnGameStart` 接收的是 `IGameStarter`，不要把它写成不存在的 `GameStarter`。战役逻辑先判断 `CampaignGameStarter`；任务逻辑在 `OnMissionBehaviorInitialize` 收到 `Mission` 后加入 `MissionBehavior`。这两个注册点的生命周期不同，把任务对象注册到战役启动器或把战役行为重复加入每场战斗，都会造成行为不触发或重复执行。

## 添加战役行为

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.SaveSystem;

namespace MyModule.Campaign
{
    public class MyCampaignBehavior : CampaignBehaviorBase
    {
        [SaveableField(1)]
        private int _customCounter = 0;

        public override void RegisterEvents()
        {
            CampaignEvents.DailyTickEvent.AddNonSerializedListener(this, OnDailyTick);
        }

        private void OnDailyTick()
        {
            _customCounter++;
            InformationManager.DisplayMessage(
                new InformationMessage($"Daily tick #{_customCounter}"));
        }

        public override void SyncData(IDataStore dataStore) { }
    }
}
```

在 `RegisterEvents` 中订阅 `CampaignEvents`；需要跨存档的状态通过 `SyncData` 和 SaveSystem 字段契约保存。`[SaveableField]` 的编号是存档契约的一部分，发布后不要随意复用或改变旧字段编号；`SubModule.xml` 也要声明对 `TaleWorlds.SaveSystem` 的依赖。详见[存档系统指南](../save-system-guide)。

## 添加任务行为

```csharp
using TaleWorlds.MountAndBlade;

namespace MyModule.Missions
{
    public class MyMissionBehavior : MissionBehavior
    {
        public override MissionBehaviorType BehaviorType => MissionBehaviorType.Other;

        public override void OnMissionStart()
        {
            base.OnMissionStart();
            InformationManager.DisplayMessage(
                new InformationMessage("Mission started"));
        }

        public override void OnAgentCreated(Agent agent)
        {
            base.OnAgentCreated(agent);
        }

        public override void OnMissionEnded()
        {
            base.OnMissionEnded();
        }
    }
}
```

`BehaviorType` 是必须明确的契约：`Logic` 表示任务逻辑模块，`Other` 适合一般扩展。可用钩子还包括 Agent 创建或移除、投射物碰撞、任务开始和结束。不要在每帧钩子里做昂贵的全量扫描，也不要在任务结束后继续持有 `Agent` 或 `Mission.Current` 的引用。

## 测试和日志

### 本地循环

1. 编译项目。
2. 将 `bin\Win64_Shipping_Client\MyModule.dll` 复制到 `Modules\MyModule\bin\Win64_Shipping_Client\`。
3. 用官方启动器或 BLSE 启动游戏。
4. 在主菜单的 `Mods` 中确认并启用 `MyModule`。
5. 进入战役或战斗，观察游戏内消息和日志。

### 日志位置

```
C:\Users\<username>\Documents\Mount & Blade II Bannerlord\logs\
├── rgl_log.txt                  # 主引擎日志
├── mod_logs\                    # 部分框架写入的 Mod 日志
└── crash_dumps\                 # 崩溃转储
```

| 现象 | 先检查 |
|------|--------|
| 模块不显示 | `rgl_log.txt`、模块 Id、`SubModule.xml` 路径和类名 |
| 启动报错 | XML 语法、DLL 依赖版本、`MissingMethodException` |
| 行为不触发 | 在 `OnGameStart` 或 `OnMissionBehaviorInitialize` 加 `InformationManager.DisplayMessage` 验证注册点 |
| 游戏崩溃 | `rgl_log.txt` 顶部的堆栈和最后一个托管调用 |

需要逐步调试时，可用 Visual Studio 的 `Debug → Attach to Process` 附加到 `Bannerlord.exe`，并在 `OnSubModuleLoad` 或行为事件中设置断点。

## 打包和发布

1. 更新 `SubModule.xml` 中的 `<Version>`。
2. 从 `bin` 中移除 pdb 和不必要文件，只保留发布所需 DLL。
3. 将整个 `Modules\MyModule` 目录压缩为 `MyModule-v1.0.0.zip`。
4. 保持 `MyModule\` 位于压缩包根目录，确保 Vortex 能正确识别。

上传 NexusMods 时说明支持的 Bannerlord 版本，并列出依赖 Mod。Vortex 通常会把压缩包解到 `Modules\MyModule\`；目录层级多一层会导致模块不可见。

## 下一步

- [常见模式](../common-patterns/)：代码组织、命名、性能和安全实践
- [游戏系统概述](../game-systems-overview/)：在 Mission、Campaign、UI 和 SaveSystem 中选择入口
- [Mod 作者路线](../modder-journey/)：从想法到发布的检查清单
- [Native 互操作](../../architecture/native-interop/)：理解托管代码与 Native 边界
- [存档系统指南](../save-system-guide/)：跨版本保存自定义数据

<!-- BEGIN SECTION INDEX -->

## ↑ 上级导航

- [版本首页](../)
- [入门指南](./)

## ↓ 同级与相关页面

- [常见模式](../common-patterns)
- [游戏系统概述](../game-systems-overview)
- [Mod 作者路线](../modder-journey)
- [Native 互操作](../../architecture/native-interop)
- [存档系统指南](../save-system-guide)

<!-- END SECTION INDEX -->
