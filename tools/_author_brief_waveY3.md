# 作者简报 — Wave Y3 批次 A（save-system 定义/ID/接口层 手写接管）

> 自动化 ulw-loop 周期文档。本批次 A 覆盖 save-system 命名空间 47 个 stub 中的前 24 页（定义层 + ID/扩展层 + 接口/解析器层）。其余 23 页（信封/回调/加载/代码生成/序列化器）留待批次 B。

## 背景
`BannerlordCode.github.io` 是 Zola 双语（中文主写）开发者手册站。项目铁律（H0）：`content/**` 下正文必须手写、源码支撑，**禁止**用任何签名→散文生成器产出类文档。已退役的生成器见 `tools/RETIRED_BODY_GENERATORS.md`，绝不可调用，也绝不可设 `BANNERLORD_ALLOW_RETIRED_BODY_GEN`。

本批次目标：把下列 stub 页**整页覆盖重写为达标手写页**（保留文件名与 URL，避免外链死亡）。

## 源路径（必读真实 .cs）
- 主权威（含 .cs）：`C:/WorkSpace/Bannerlord/bannerlord-1.3.15/TaleWorlds.SaveSystem/`
  - 多数定义类在 `Definition/` 子目录
  - 根目录有：`ContainerType.cs`, `EntryId.cs`, `FolderId.cs`, `MetaData.cs`, `MetaDataExtensions.cs`, `SaveEntry.cs`, `SaveEntryExtension.cs`, `SaveEntryFolder.cs`, `SaveGameFileInfo.cs`, `SavedMemberType.cs`, `IArchiveContext.cs`, `ISavedStruct.cs`, `BinaryWriterFactory.cs`, `SaveableBasicTypeDefiner.cs`, `SaveableInterfaceAttribute.cs`
  - 解析器接口（`IConflictResolver`/`IEnumResolver`/`IObjectResolver`）用 Grep 在 `bannerlord-1.3.15/TaleWorlds.SaveSystem/` 下定位（可能在 `Resolvers/` 或根）
- 跨版本核对（仅 DLL，非 .cs）：`C:/WorkSpace/Bannerlord/bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.SaveSystem/`（含 `TaleWorlds.SaveSystem.Resolvers`）。仅用于确认 API 是否变化，不抄 DLL。

## 风格参考（必读其一，对齐版式）
- `C:/WorkSpace/Bannerlord/BannerlordCode.github.io/content/v1.3.15/zh/api/save-system/SaveManager.md`（金标准）
- 同目录已达标页：`SaveableRootClassAttribute.md` / `SaveContext.md` / `TypeDefinition.md` / `ArchiveSerializer.md`

## 验收门禁（classifyPage 判 `deep_pass` 才计入完成）
每页必须**全部**满足，否则仍是 stub：
1. 概述段 > 60 字符，有信息量（不能是“`X` 是 TaleWorlds.Y 下的公开类型”）
2. 心智模型段 > 80 字符：含是什么 / 何时用 / 何时不用 / 谁创建持有 / 处在哪一层
3. 依赖图段含 **≥2 个** 指向已存在页面的真实相对链接（必须解析通过）
4. 真实 C# 使用示例 ≥3 行，且**代码行本身**含令牌 `SaveManager` 或 `Game`（注释里的 `// SaveManager` 不算；禁止 `// ...`、`SomeValue`、`service = ...`）
5. 零禁止样板句（见下）

## 链接规则（违反 = 断链/404，历史已多次踩坑，务必遵守）
- 兄弟叶页（同 `save-system/`）：`[X](../X)` —— **禁止** `./X`（`./X` 会解析成当前页的子页而断链）
- 父级 section 索引：`[…](../)`
- 跨到 `api/` 其他子目录：`[X](../../<subdir>/<X>)`
- 跨到 `architecture/`：`[X](../../../architecture/save-system)`
- 已知正确跨目录目标：
  - `Game` → `../../core-extra/Game`
  - `MBObjectManager` → `../../campaign-ext/MBObjectManager`
- 同目录已存在页直接用 `../Name`（示例）：`../SaveManager`、`../SaveableRootClassAttribute`、`../SaveableFieldAttribute`、`../SaveablePropertyAttribute`、`../SaveableTypeDefiner`、`../SaveContext`、`../DefinitionContext`、`../LoadContext`、`../GameData`、`../ArchiveSerializer`、`../ArchiveDeserializer`、`../ISaveDriver`、`../FileDriver`、`../AsyncFileSaveDriver`、`../InMemDriver`、`../SaveOutput`、`../LoadResult`、`../ContainerSaveData`、`../ContainerLoadData`、`../ObjectSaveData`、`../ObjectLoadData`、`../TypeDefinition`、`../MetaData`、`../MemberTypeId`、`../ContainerDefinition`、`../IBasicTypeSerializer`、`../LoadData`
- 写链接前**确认目标页存在**（本目录 deep_pass 页均可链；architecture 的 `save-system.md` 存在）
- 禁止链接到不存在页面

## 禁止样板句（命中即拒收）
- “阅读时先通过属性了解状态”
- 概述只有“`X` 是 TaleWorlds.Y 下的公开类型”
- 示例为 `// ...`、`SomeValue`、`IIScene` 类笔误、`service = ...`
- 只有方法签名列表、无任何“何时调用”
- 无依赖、无风险、无获取方式
- 链到不存在页面

## 页面结构（每篇独立类页必须含）
1. Frontmatter：`title`, `description`（有信息量，非类名复述）
2. 元数据块：命名空间 / 模块 / 类型 / 基类 / 源文件路径（用 `**类型：**` 全角冒号标题）
3. 一句话职责（去掉类名仍能懂）
4. 心智模型：生命周期、谁创建/持有、处在哪一层（Foundation/Save…）
5. 何时用 / 何时不要用（含正确替代，如自定义字段应走 `[SaveableField]` + `SaveableTypeDefiner` 而非手改二进制）
6. 依赖图（可点击，`## 依赖图` 精确标题无后缀）：上游类型 / 下游类型或系统 / 相关 Save 点
7. 风险段（触达则必填）：坏档、错误阶段 tick、未注册 ObjectManager、加载顺序、版本不兼容等 → 可能导致崩溃或坏档的用法
8. 成员说明：每个 mod 可见关键成员 = 用途 + 副作用 + 调用时机（可按主题分组；**禁止**纯签名墙当唯一正文）
9. 最小真实示例（1–2 个）：真实获取路径（如 `SaveManager.Save(...)` / 在 `CampaignBehaviorBase.SyncData` 中标记 `[SaveableField]`），代码含 `SaveManager` 或 `Game`
10. 导航块：↑ Parent、↔ Sibling、相关类；相对路径；目标必须存在
11. 泛型用反引号包裹（`` `List<Hero>` ``），防 Zola 当 HTML 吃掉

## 你的任务（按分配页逐一）
读对应 .cs 源 → 读风格参考 → 整页重写（Write 覆盖 stub，保留文件名与 URL）→ 自检门禁。完成后运行：
`cd C:/WorkSpace/Bannerlord/BannerlordCode.github.io && node tools/_tmp_classify_save.mjs`
确认你负责的页进入 `deep_pass` 计数，报告：每页 deep_pass 否 / 依赖链接数 / 示例令牌 / 是否命中禁止句。

---

## 批次 A 分配

### Agent A — 定义层 + 代码生成定义器（12 页）
输出目录：`C:/WorkSpace/Bannerlord/BannerlordCode.github.io/content/v1.3.15/zh/api/save-system/`
| 页 | 源文件 |
|----|--------|
| BasicTypeDefinition | bannerlord-1.3.15/TaleWorlds.SaveSystem/Definition/BasicTypeDefinition.cs |
| EnumDefinition | bannerlord-1.3.15/TaleWorlds.SaveSystem/Definition/EnumDefinition.cs |
| FieldDefinition | bannerlord-1.3.15/TaleWorlds.SaveSystem/Definition/FieldDefinition.cs |
| GenericTypeDefinition | bannerlord-1.3.15/TaleWorlds.SaveSystem/Definition/GenericTypeDefinition.cs |
| InterfaceDefinition | bannerlord-1.3.15/TaleWorlds.SaveSystem/Definition/InterfaceDefinition.cs |
| MemberDefinition | bannerlord-1.3.15/TaleWorlds.SaveSystem/Definition/MemberDefinition.cs |
| PropertyDefinition | bannerlord-1.3.15/TaleWorlds.SaveSystem/Definition/PropertyDefinition.cs |
| StructDefinition | bannerlord-1.3.15/TaleWorlds.SaveSystem/Definition/StructDefinition.cs |
| TypeDefinitionBase | bannerlord-1.3.15/TaleWorlds.SaveSystem/Definition/TypeDefinitionBase.cs |
| CustomField | bannerlord-1.3.15/TaleWorlds.SaveSystem/Definition/CustomField.cs |
| SaveableBasicTypeDefiner | bannerlord-1.3.15/TaleWorlds.SaveSystem/SaveableBasicTypeDefiner.cs |
| SaveableInterfaceAttribute | bannerlord-1.3.15/TaleWorlds.SaveSystem/SaveableInterfaceAttribute.cs |

### Agent B — ID/扩展层 + 接口/解析器层（12 页）
输出目录同上
| 页 | 源文件 |
|----|--------|
| SaveId | bannerlord-1.3.15/TaleWorlds.SaveSystem/Definition/SaveId.cs |
| ContainerSaveId | bannerlord-1.3.15/TaleWorlds.SaveSystem/Definition/ContainerSaveId.cs |
| GenericSaveId | bannerlord-1.3.15/TaleWorlds.SaveSystem/Definition/GenericSaveId.cs |
| TypeSaveId | bannerlord-1.3.15/TaleWorlds.SaveSystem/Definition/TypeSaveId.cs |
| EntryId | bannerlord-1.3.15/TaleWorlds.SaveSystem/EntryId.cs |
| FolderId | bannerlord-1.3.15/TaleWorlds.SaveSystem/FolderId.cs |
| ContainerType | bannerlord-1.3.15/TaleWorlds.SaveSystem/ContainerType.cs |
| SavedMemberType | bannerlord-1.3.15/TaleWorlds.SaveSystem/SavedMemberType.cs |
| IArchiveContext | bannerlord-1.3.15/TaleWorlds.SaveSystem/IArchiveContext.cs（不存在则 Grep 定位） |
| IConflictResolver | Grep `interface IConflictResolver` 于 bannerlord-1.3.15/TaleWorlds.SaveSystem/ |
| IEnumResolver | Grep `interface IEnumResolver` 于同目录 |
| IObjectResolver | Grep `interface IObjectResolver` 于同目录 |
