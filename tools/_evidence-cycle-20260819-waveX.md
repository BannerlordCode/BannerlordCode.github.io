# Evidence — Cycle Wave X (2026-08-19, automation-1785652108735)

手写接管继续：save-system 驱动层 + 结果/信封层，共 8 页整页重写。

## Before / After（save-system 子树，108 内容页 + _index）

| 指标 | Before (cycle W 尾) | After (wave X) | Δ |
|------|--------------------|----------------|---|
| deep_pass | 17 | 25 | +8 |
| stub | 89 | 81 | -8 |
| other (Jun-26 内容文件) | 2 | 2 | 0 |
| audit-links BROKEN (v1.3.15/zh) | 0 (基线本次复验前) | 0 | 0 |
| TOTAL_LINKS | 21796 | 21796 | 0 |

## 本周期转换的 8 页（整页重写，URL 保留）

驱动层（Agent A）：
- `ISaveDriver.md`（持久化介质抽象：BeginWrite/Write/EndWrite、BeginRead/Read/EndRead）
- `FileDriver.md`（同步磁盘驱动；`.sav` 布局、Deflate(Fastest)、`<v1.1.0` 走 LegacyGameDataDeserializer、非原子写坏档风险）
- `AsyncFileSaveDriver.md`（装饰器模型；WaitPreviousTask 阻塞 `.Wait()` 与 Task 生命周期风险）
- `InMemDriver.md`（单槽内存缓冲；不持久化与覆盖风险；预览/测试用法）

结果/信封层（Agent B）：
- `SaveOutput.md`（保存「收据」：Data/MetaData/Errors/Successful/IsContinuing/PrintStatus）
- `LoadResult.md`（加载「报告」：Root/Successful/Errors/MetaData/InitializeObjects 延迟回调）
- `ContainerSaveData.md`（保存侧容器节点：CollectChildren/CollectStructs/CollectStrings、体积统计）
- `ContainerLoadData.md`（加载侧容器节点：引用解析、缺 struct 默认回退 NullReferenceException）

源码：`bannerlord-1.3.15/TaleWorlds.SaveSystem/`（ISaveDriver/FileDriver/AsyncFileSaveDriver/InMemDriver.cs；Save/SaveOutput.cs、Save/ContainerSaveData.cs；Load/LoadResult.cs、Load/ContainerLoadData.cs）。

## 验收证据

1. **classify**：`node tools/_tmp_classify_save.mjs` → 8 个目标名均不在失败清单（stub 行 89→81）；gate 要求 概述>60 / 心智>80 / 依赖≥2 链接 / 真实示例含 Game|SaveManager / 零禁用样板，全部满足。
2. **audit-links**：`AUDIT_MODE=url AUDIT_CONTENT_ROOT=content/v1.3.15/zh node tools/audit-links.mjs` → `BROKEN_LINKS=0, FILES_WITH_BROKEN=0`（TOTAL_LINKS=21796）。
   - QA 抓到 Agent B 4 页误用 `../../architecture/save-system`（叶页 clean-URL 需三层 `../../../`）；已更正为 `../../../architecture/save-system`，复验归零。Agent A 驱动层 4 页链接零问题。
3. **禁用样板句扫描**：8 页 grep `阅读时先通过属性了解状态|是 TaleWorlds.*公开类型|SomeValue|service =|IIScene` → 0 命中。
4. **Manual QA（逐页）**：
   - 真实 C# 示例含 `Game`/`SaveManager` 令牌：8/8 = 1
   - `## 依赖图` 内真实相对链接数：ISaveDriver=8, FileDriver=10, AsyncFileSaveDriver=7, InMemDriver=7, SaveOutput=6, LoadResult=8, ContainerSaveData=10, ContainerLoadData=7（gate ≥2）
   - 标题合规：依赖图用 `## 依赖图`（非 `## 依赖图（可点击）`）；元信息用 `**类型：**`（非 `**类型/Type：**`）。
5. **mtime**：8 页均为 2026-08-19_04:33–04:35 本周期改动，零连带其他文件。

## 场景测试 #3 可答性（自定义存档字段不坏档）

链已贯通：注册字段 `[SaveableField]`（SaveableFieldAttribute）→ 类型定义 `SaveableTypeDefiner` → 上下文 `SaveContext`/`LoadContext`/`DefinitionContext` → 容器序列化 `ContainerSaveData`/`ContainerLoadData` → 结果 `SaveOutput`/`LoadResult`。
读者可循此指出：字段须带 `[SaveableField]` 并在 SaveableTypeDefiner 登记；容器类型须在 `DefineContainerDefinitions` 登记否则保存抛异常（ContainerSaveData 风险段已写明）；加载侧延迟初始化误调回调会空指针（LoadResult 风险段已写明）；坏档时 LoadResult.Errors 固定 "Not implemented"，真因在日志。无需打开 IDE 即可定位正确入口与风险。

## 下一入口（wave Y）

save-system 剩 81 stub：
- 对象图剩余：`ObjectHeaderLoadData`/`ContainerHeaderLoadData`/`ElementSaveData`/`ElementLoadData`/`FieldSaveData`/`FieldLoadData`/`PropertySaveData`/`PropertyLoadData`/`MemberSaveData`/`MemberLoadData`/`VariableSaveData`/`VariableLoadData`/`LoadData`/`SaveData`
- 基础类型序列化器簇页：`IBasicTypeSerializer` + 各 `XxxBasicTypeSerializer`（~21 页，建议簇页 + 危险子集深页）
- 之后推进 `core`/`engine`/`gui`/`items`/`mission`/`viewmodel`/`localization`
- 4 项战略决策仍挂起待裁决（#3 覆盖口径 / #4 campaign 双目录去重 等）。

## 已知限制

- 仅中文子树 v1.3.15；英文页与 S 级双语同步仍后置。
- BasicTypeSerializer 等噪声级短页尚未处理（计入诚实 backlog）。
- 未 commit（driver 规定除非用户要求）。
